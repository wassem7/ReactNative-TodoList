import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import About from '../screens/about';
import Header from '../shared/Header';
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={'About Gamezone'} />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default AboutStack;
