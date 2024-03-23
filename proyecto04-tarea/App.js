import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Menu from './src/screens/Menu';
import NearbyStores from './src/screens/NearbyStores'; 
import Order from './src/screens/Order'; 
import Settings from "./src/screens/Settings";
import AboutUs from "./src/screens/AcercaDe";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Tiendas cercanas" component={NearbyStores} /> 
        <Drawer.Screen name="Orden" component={Order} /> 
        <Drawer.Screen name="Configuraciones" component={Settings} /> 
        <Drawer.Screen name="Acerca de" component={AboutUs} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Path: src/screens/Home.js