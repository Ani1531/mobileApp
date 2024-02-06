import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faIndianRupeeSign,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({route, navigation}) => {
  // const user = useSelector(state => state.user);

  useEffect(() => {
    navigation.setOptions({
      title: 'My Account',
      tabBarLabel: 'Home',
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.boxStyle}>
        <FontAwesomeIcon icon={faUserCircle} size={100} color={'grey'} />
        <Text style={styles.tileStyle}>{user.mobile}</Text>
      </View>
      <View style={styles.boxStyle}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            Plan
          </Text>
          <Text style={{fontSize: 20}}>
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              size={16}
              color={'grey'}
            />
            {/* {user.plan.toUpperCase()} */}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            VALID TILL
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {/* {user.dueDate.toUpperCase()} */}
          </Text>
        </View>
      </View>
      <View style={styles.boxStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            margin: 4,
            padding: 6,
            width: 50,
            height: 80,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {/* {user.dataRemaining} */}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
            }}>
            DATA REMAINING
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            margin: 4,
            padding: 6,
            width: 50,
            height: 80,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'white',
            }}>
            BILL:{' '}
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              size={16}
              color={'white'}
            />
            {/* {user.bill} */}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>
            {/* dueDate on {user.dueDate.toUpperCase()} */}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  tileStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});

export default HomeScreen;
