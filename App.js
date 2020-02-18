import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import home from './assets/home.png';
import notification from './assets/notification.png';
import chat from './assets/chat.png';
import chatbot from './assets/chatbot.png';
import profile from './assets/profile.png';

import TabBarIcon from './components/TabBarIcon';
import BotButton from './components/BotButton';

import {
  HomeScreen,
  NotificationScreen,
  BotScreen,
  ChatScreen,
  ProfileScreen
} from './screens/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: ({ focused }) => TabBarIcon(focused)
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => TabBarIcon(focused, home)
          }}
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => TabBarIcon(focused, notification)
          }}
          name='Notification'
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => <BotButton />
          }}
          name='Bot'
          component={BotScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => TabBarIcon(focused, chat)
          }}
          name='Chat'
          component={ChatScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => TabBarIcon(focused, profile)
          }}
          name='Profile'
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
