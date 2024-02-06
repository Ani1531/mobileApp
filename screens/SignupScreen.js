import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import {validMobile, validPin} from '../utiles/validator';
import axios from 'axios';

const SignupScreen = ({navigation}) => {
  const [signupState, setSignupState] = useState({
    mobile: '',
    pin: '',
    confirmPin: '',
  });
  const [errorState, setErrorState] = useState({
    mobile: '',
    pin: '',
    confirmPin: '',
  });
  const [mandatory, setMandatory] = useState(false);
  const [sucessMsg, setSucessMsg] = useState('');
  const [disable, setDisable] = useState(true);

  const handleChange = (name, value) => {
    setSignupState({...signupState, [name]: value}),
      checkValidations(name, value);
  };

  const checkValidations = (name, value) => {
    switch (name) {
      case 'mobile':
        if (value.length === 10 && validMobile(value)) {
          setErrorState({...errorState, mobile: ''});
        } else {
          setErrorState({...errorState, mobile: 'Invalid Mobile Number'});
        }
        break;
      case 'pin':
        if (value.length === 4 && validPin(value)) {
          setErrorState({...errorState, pin: ''});
        } else {
          setErrorState({...errorState, pin: 'Invalid Pin'});
        }
        break;
      case 'confirmPin':
        if (value.length === 4 && validPin(value)) {
          setErrorState({...errorState, confirmPin: ''});
        } else if (value !== signupState.pin) {
          setErrorState({...errorState, confirmPin: 'Pin not matched'});
        } else {
          setErrorState({...errorState, confirmPin: 'Invalid Pin'});
        }
        break;
      default:
        break;
    }
    if (Object.values(errorState).every(x => x === '')) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (signupState.mobile === '' || signupState.pin === '') {
      setMandatory(true);
    } else {
      setMandatory(false);
      axios
        .post('http://10.68.60.58:4000/users', signupState)
        .then(res => {
          if (res.data) {
            setSucessMsg('User created successfully');
            setTimeout(() => {
              setSucessMsg('');
              navigation.navigate('Login');
            }, 3000);
          }
          // console.log('res.data', res.data);
          // navigation.navigate('Login');
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>SIGNUP</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={value => handleChange('mobile', value)}
            value={signupState.mobile}
          />
        </View>
        {errorState.mobile !== '' && (
          <Text style={styles.errorText}>{errorState.mobile}</Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Pin"
            maxLength={4}
            keyboardType="numeric"
            onChangeText={value => handleChange('pin', value)}
            value={signupState.pin}
          />
        </View>
        {errorState.pin !== '' && (
          <Text style={styles.errorText}>{errorState.pin}</Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Pin"
            maxLength={4}
            keyboardType="numeric"
            onChangeText={value => handleChange('confirmPin', value)}
            value={signupState.confirmPin}
          />
        </View>
        {errorState.confirmPin !== '' && (
          <Text style={styles.errorText}>{errorState.confirmPin}</Text>
        )}

        {mandatory && (
          <Text style={styles.errorText}>*Please fill all the fields</Text>
        )}
        <View style={{...styles.inputView, ...styles.btnView}}>
          <Button
            disabled={!disable}
            style={styles.btn}
            title="Signup"
            onPress={handleSubmit}
          />
        </View>
        {sucessMsg !== '' && (
          <Text style={styles.sucessMsgStyle}>{sucessMsg}</Text>
        )}
        <View style={styles.text}>
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Login')}>
            Already have an account? Login
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  titleView: {
    width: 150,
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
    color: 'red',
    alignSelf: 'center',
  },
  sucessMsgStyle: {
    color: 'green',
    alignSelf: 'center',
  },
});
