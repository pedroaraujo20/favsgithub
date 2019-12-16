import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Trending from '~/pages/Trending';
import Favorites from '~/pages/Favorites';

export default createAppContainer(
  createBottomTabNavigator(
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
  )
);
