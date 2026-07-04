import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import FightingScreen from './src/screens/FightingScreen';
import ShopScreen from './src/screens/ShopScreen';
import SettingsScreen from './src/screens/SettingsScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#FF6B00', tabBarInactiveTintColor: '#888', headerShown: true, tabBarStyle: { backgroundColor: '#1a1a1a', borderTopColor: '#FF6B00' } }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home', tabBarLabel: 'Home' }} />
      <Tab.Screen name="Fight" component={FightingScreen} options={{ title: 'Fight', tabBarLabel: 'Fight' }} />
      <Tab.Screen name="Shop" component={ShopScreen} options={{ title: 'Shop', tabBarLabel: 'Shop' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings', tabBarLabel: 'Settings' }} />
    </Tab.Navigator>
  );
}
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} initialParams={{ setIsLoggedIn }} />
        ) : (
          <Stack.Screen name="MainTabs" component={HomeTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}