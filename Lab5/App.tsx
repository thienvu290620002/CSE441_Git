import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddService from './src/screens/AddService';
import ServiceDetail from './src/screens/ServiceDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import EditService from './src/screens/EditService';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddService" 
          component={AddService} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen name="ServiceDetail" 
          component={ServiceDetail} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen name="EditService" 
          component={EditService} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;