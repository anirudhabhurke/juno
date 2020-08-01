import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PlanScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>I am PlanScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PlanScreen;
