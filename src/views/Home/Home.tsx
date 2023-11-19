import React from 'react';
import Foryou from '../Foryou/Foryou';
import {View} from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Foryou />
    </View>
  );
}
