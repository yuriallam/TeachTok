import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const ICONS_MAP = {
  Home: 'home',
  Discover: 'compass',
  Activity: 'timer',
  Bookmarks: 'bookmark',
  Profile: 'account-circle',
};

const styles = StyleSheet.create({
  tabBarLabelFocused: {
    color: 'white',
  },
  tabBarLabelUnfocused: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'black'},
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, size}) => {
          const iconName = ICONS_MAP[route.name] || 'question'; // Default icon
          const color = focused ? 'white' : 'rgba(255, 255, 255, 0.5)';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({focused}) => (
          <Text
            style={
              focused ? styles.tabBarLabelFocused : styles.tabBarLabelUnfocused
            }>
            {route.name}
          </Text>
        ),
      })}>
      {Object.keys(ICONS_MAP).map(routeName => (
        <Tab.Screen key={routeName} name={routeName} component={Home} />
      ))}
    </Tab.Navigator>
  );
}
