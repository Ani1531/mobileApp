import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/splash002.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
