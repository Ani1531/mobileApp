import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// Feedback, Internet access, Value added services, Port number, Roaming, General
const data = [
  {label: 'Feedback', value: 'Feedback'},
  {label: 'Internet access', value: 'Internet access'},
  {label: 'Value added services', value: 'Value added services'},
  {label: 'Port number', value: 'Port number'},
  {label: 'Roaming', value: 'Roaming'},
  {label: 'General', value: 'General'},
];

export default function Contact({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const handelChange = text => {
    setText(text);
  };

  const handlePress = () => {
    navigation.navigate('TabScreen', {
      screen: 'Home',
    });
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select an issue' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Text
        style={{
          marginTop: 16,
          marginBottom: 6,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Issue Description
      </Text>
      <TextInput
        style={{
          height: 100,
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
        }}
        multiline={true}
        numberOfLines={4}
        onChangeText={handelChange}
        textAlignVertical="top"
        value={text}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnStyle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Submit
        </Text>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 900,
                marginRight: 'auto',
                marginBottom: 22,
              }}>
              Message
            </Text>
            <Text style={[styles.modalText, {marginBottom: 10}]}>
              Issue submitted successfully
            </Text>
            <Pressable style={styles.btnStyle} onPress={() => handlePress()}>
              <Text style={{...styles.titleStyle, color: 'white'}}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, alignItems: 'center'},
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btnStyle: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
});
