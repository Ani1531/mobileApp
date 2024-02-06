import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import toastService from '../utiles/Toast';
import {getLoginCred} from '../redux/actionsCreaters/UserActionCreater';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [loginState, setLoginState] = React.useState({
    mobile: '',
    pin: '',
  });
  const [mandatory, setMandatory] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setLoginState({...loginState, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(
    //   getLoginCred(`/users?mobile=${loginState.mobile}&pin=${loginState.pin}`),
    // );

    if (!loginState.mobile || !loginState.pin) {
      setMandatory(true);
      toastService.showToast('ERROR', 'All fields are mandatory');
    } else {
      setMandatory(false);
      axios
        .get('http://localhost:3000/users')
        .then(res => {
          const users = res.data;
          const user = users.find(
            user =>
              user.mobile === loginState.mobile && user.pin === loginState.pin,
          );
          if (user) {
            navigation.navigate('TabScreen', {
              screen: 'Home',
            });
            // dispatch(getLoginCred(user));
          } else {
            setMandatory(true);
            toastService.showToast('ERROR', 'Invalid Credentials');
          }
        })
        .catch(err => {
          setMandatory(true);
          toastService.showToast('ERROR', 'Something went wrong');
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>LOGIN</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={value => handleChange('mobile', value)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Pin"
            maxLength={4}
            keyboardType="numeric"
            onChangeText={value => handleChange('pin', value)}
          />
        </View>
        <View style={{...styles.inputView, ...styles.btnView}}>
          <Button style={styles.btn} title="Login" onPress={handleSubmit} />
        </View>
        <View style={styles.text}>
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Signup')}>
            Go for SignUp
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  titleView: {
    width: 100,
    marginBottom: 30,
    marginTop: 140,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputView: {
    margin: 12,
    marginHorizontal: 40,
    borderBottomWidth: 1,
  },
  input: {
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderWidth: 0,
  },
  btnView: {
    marginTop: 30,
    borderBottomWidth: 0,
    width: 100,
    alignSelf: 'center',
  },
  btn: {
    height: 100,
    width: 200,
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
  },
  errorText: {
    marginTop: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
