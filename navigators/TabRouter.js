import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/ContactScreen';
import ChangePlansScreen from '../screens/ChangePlansScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFileInvoiceDollar,
  faHouse,
  faQuestionCircle,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

// add tabs at the bottom of the screen
const Tab = createBottomTabNavigator();

// <FontAwesomeIcon icon={ faMugSaucer } />

export default function TabRouter({}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? faHouse : faHouse;
          } else if (route.name === 'ChangePlans') {
            iconName = focused ? faFileInvoiceDollar : faFileInvoiceDollar;
          } else if (route.name === 'Contact Us') {
            iconName = focused ? faUserGroup : faUserGroup;
          } else {
            iconName = focused ? faQuestionCircle : faQuestionCircle;
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'teal'},
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ChangePlans" component={ChangePlansScreen} />
      <Tab.Screen name="Contact Us" component={AboutScreen} />
    </Tab.Navigator>
  );
}
