import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import colors from '../constants/colors';

const iconMap = {
  index: 'home',
  productos: 'fish',
  'producto-del-dia': 'star',
  carrito: 'cart',
} as const;

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const name = iconMap[route.name as keyof typeof iconMap];
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: '#eee',
          elevation: 8,
          height: 64,
          paddingBottom: 8,
        },
      })}
    />
  );
}