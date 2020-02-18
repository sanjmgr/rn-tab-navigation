import React from 'react';
import { Image } from 'react-native';

const TabBarIcon = (focused, source) => {
  return (
    <Image
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18
      }}
      source={source}
    />
  );
};

export default TabBarIcon;
