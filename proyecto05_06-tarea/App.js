import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import DrinkMenu from './src/screens/Menu';
import Order from './src/screens/Order';
import NearbyStores from './src/screens/NearbyStores';
import Settings from './src/screens/Settings';
import AcercaDe from './src/screens/AcercaDe';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'DrinkMenu') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Pedido') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Tiendas') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Configuraciones') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'AcercaDe') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00704A',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Inicio" component={Home} options={{ tabBarBadge: 3, headerShown: false }} />
        <Tab.Screen name="DrinkMenu" component={DrinkMenu} />
        <Tab.Screen name="Pedido" component={Order} />
        <Tab.Screen name="Tiendas" component={NearbyStores} />
        <Tab.Screen name="Configuraciones" component={Settings} />
        <Tab.Screen name="AcercaDe" component={AcercaDe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



