import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigation/Tabs';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
