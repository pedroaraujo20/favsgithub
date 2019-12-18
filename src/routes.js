import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Trending from '~/pages/Trending';
import Favorites from '~/pages/Favorites';
import Repository from '~/pages/Repository';
import WebView from '~/pages/WebView';

export default createAppContainer(
  createStackNavigator(
    {
      screen: createBottomTabNavigator(
        {
          Trending,
          Favorites,
        },
        {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#FFF',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#93291E',
            },
          },
        }
      ),
      Repository,
      WebView,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    }
  )
);
