import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import DetailContactScreen from './src/screens/DetailContactScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import DetailContactFavorite from './src/screens/DetailContactFavorite'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Contact" component={HomeScreen} />
          <Stack.Screen name="DetailContactScreen" component={DetailContactScreen} />
          <Stack.Screen name = "FavoriteScreen" component={FavoriteScreen} />
          <Stack.Screen name="DetailContactFavorite" component={DetailContactFavorite} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;