import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Loader = () => {
  const loaderReducer = useSelector(state => state.loaderReducer);
  const [loading, setLoading] = React.useState(true);
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="teal" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});

export default Loader;
