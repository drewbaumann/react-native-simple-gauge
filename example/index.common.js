/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gaugeTop}>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={100}
            cropDegree={90}
            tintColor="#4682b4"
            backgroundColor="#b0c4de" />
        </View>
        <View style={styles.gaugeBottom}>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={0}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de" />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={180}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de" />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={90}
              cropDegree={0}
              tintColor="#4682b4"
              backgroundColor="#b0c4de" />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={0}
              cropDegree={180}
              tintColor="#4682b4"
              backgroundColor="#b0c4de" />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={90}
              cropDegree={180}
              tintColor="#4682b4"
              backgroundColor="#b0c4de" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  gaugeTop: {
    padding: 20,
  },
  rowItem: {
    flex: 0.2,
    alignItems: 'center',
  },
  gaugeBottom: {
    flexDirection: 'row',
    paddingTop: 20,
  },
});

AppRegistry.registerComponent('example', () => example);
