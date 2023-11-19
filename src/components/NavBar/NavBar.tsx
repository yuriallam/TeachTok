import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Icon name="timer" size={20} color="white" />
        <Text style={styles.timerText}>10m</Text>
      </View>
      <View style={styles.foryouContainer}>
        <Text style={styles.foryouText}>For You</Text>
        <View style={styles.foryouBorder} />
      </View>
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={30} color="white" />
      </View>
    </View>
  );
}
