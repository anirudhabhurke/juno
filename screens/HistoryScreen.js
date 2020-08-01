import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HistoryScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>I am HistoryScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HistoryScreen;
