import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { productsData } from '../CONSTANT';
import axios from 'axios';

const FaltlistComp = () => {
  const [prodData, setProdDate] = useState([]);
  const [selectedId, setSelectedId] = useState();

  const fetchData = async () => {
    await axios
      .get('http://api.adviceslip.com/advice/1')
      .then((responseObj) => {
        // setProdDate(responseObj);
        console.log(responseObj);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();

    // setProdDate(productsData);
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Image
          style={{
            width: 120,
            height: 180,
          }}
          source={{
            uri: item.image,
          }}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ ...styles.comStyle, fontWeight: '800' }}>
            {item.title}
          </Text>
          <Text style={styles.comStyle}>{item.description}</Text>
          <Text style={styles.comStyle}>Price: {item.price}</Text>
          <Text style={styles.comStyle}>Rating: {item.rating.rate}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={prodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  itemView: {
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 6,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(56, 173, 169,0.5)',
    borderRadius: 10,
  },
  comStyle: {
    paddingVertical: 12,
    color: 'white',
    paddingHorizontal: 2,
  },
});

export default FaltlistComp;
