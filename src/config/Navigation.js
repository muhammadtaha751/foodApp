import React from 'react';
import { Image } from 'react-native';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Explore from '../screens/Explore';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import ProductDetail from '../screens/ProductDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Hide labels for all screens
        tabBarActiveTintColor: '#FED718', // Color when tab is active
        tabBarInactiveTintColor: '#000',
        headerShown: false,  // Color when tab is inactive
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/home-outline.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen name="Category" component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/grid-outline.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen name="Explore" component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/compass-outline.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/shopping-cart-outline.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/person-outline.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
