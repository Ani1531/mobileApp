import axios from 'axios';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Pressable, Modal, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';

const ChangePlansScreen = () => {
  const [plans, setPlans] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    axios('http://10.68.60.81:4000/plans')
      .then(res => {
        setPlans(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(plans);
  }, []);

  const handlePlans = item => {
    setModalVisible(true);
  };

  const renderPlans = ({item}) => {
    return (
      <View>
        <View style={styles.eachContentStyle}>
          <View style={styles.boxStyle}>
            <Text style={styles.titleStyle}>Plan</Text>
            <Text style={styles.valStyle}>
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                size={16}
                color={'grey'}
              />
              {item.name}
            </Text>
          </View>
          <View style={styles.boxStyle}>
            <Text style={styles.titleStyle}>VALID TILL</Text>
            <Text style={styles.valStyle}>{item.validity}</Text>
          </View>
          <View style={styles.boxStyle}>
            <Text style={styles.titleStyle}>TALKTIME</Text>
            <Text style={styles.valStyle}>{item.talktime}</Text>
          </View>
          <View style={styles.boxStyle}>
            <Text style={styles.titleStyle}>DATA</Text>
            <Text style={styles.valStyle}>{item.data}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            handlePlans(item);
          }}
          style={styles.btnStyle}>
          <Text style={{...styles.titleStyle, color: 'white'}}>
            Confirm Plan
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={plans}
        renderItem={renderPlans}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'grey',
            }}
          />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
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
            <Text style={styles.modalText}>
              Chnage Plan request raised successfully
            </Text>
            <Text style={[styles.modalText, {marginBottom: 10}]}>
              Plan will be changed in 24 hours
            </Text>
            <Pressable
              style={styles.btnStyle}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{...styles.titleStyle, color: 'white'}}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ChangePlansScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  eachContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  boxStyle: {
    justifyContent: 'space-between',
    margin: 6,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  valStyle: {
    fontSize: 18,
    color: 'black',
  },
  btnStyle: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    margin: 10,
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
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});
