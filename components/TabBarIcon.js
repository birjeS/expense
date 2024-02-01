import React from 'react';
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign as ADI } from '@expo/vector-icons';

const TabBarIcon = ({ type, color, size }) => {
  switch (type) {
    case 'expenses':
      return <MCI name='tray-arrow-up' color={color} size={size} />;
    case 'reports':
      return <Ionicons name='bar-chart' size={size} color={color} />;
    case 'add':
      return <ADI name='plus' size={size} color={color} />;
    case 'settings':
      return <MCI name='cog' size={size} color={color} />;
    default:
      return null;
  }
};

export { TabBarIcon };
