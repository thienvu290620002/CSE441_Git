// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from 'react-redux';
// import { store } from './src/store/store';
// import HomeScreen from './src/screens/HomeScreen'; // Ensure this path is correct
// import DetailContactScreen from './src/screens/DetailContactScreen'; // Ensure this path is correct
// import FavoriteScreen from './src/screens/FavoriteScreen'; // Ensure this path is correct
// import DetailContactFavorite from './src/screens/DetailContactFavorite'; // Ensure this path is correct
// import { BottomNavigation } from 'react-native-paper';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: 'Home', icon: 'home' },
//     { key: 'Favorites', icon: 'star' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     Home: () => (
//       <Stack.Navigator>
//         <Stack.Screen name="Contact" component={HomeScreen} />
//         <Stack.Screen name="DetailContactScreen" component={DetailContactScreen} />
//       </Stack.Navigator>
//     ),
//     Favorites: () => (
//       <Stack.Navigator>
//         <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
//         <Stack.Screen name="DetailContactFavorite" component={DetailContactFavorite} />
//       </Stack.Navigator>
//     ),
//   });

//   const renderIcon = ({ route, focused, color }) => {
//     return <Icon name={route.icon} size={30} color={color} />;
//   };

//  return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <SafeAreaProvider>
//           <BottomNavigation
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//             renderIcon={renderIcon}
//             barStyle={{ backgroundColor: 'blue' }} 
//           />
//         </SafeAreaProvider>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/screens/HomeScreen';
import Store from './src/store/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailContactScreen from './src/screens/DetailContactScreen'
import DetailContactFavorite from './src/screens/DetailContactFavorite';
import Favorites from './src/screens/FavoriteScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();
function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Contacts" component={Contacts}
        options={{ title: "Contacts"}} />
      <Stack.Screen
        name="DetailContactScreen"
        component={DetailContactScreen}
        options={{ title: "Profile contact" }}
      />
    </Stack.Navigator>
  );
}
function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name='Favorites' component={Favorites}
        options={{ title: "Favorites" }} />
      <Stack.Screen
        name='DetailContactFavorite'
        component={DetailContactFavorite}
        options={{ title: "Profile contact" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
return (
  <Tab.Navigator
    initialRouteName='ContactsScreens'
    barStyle={{ backgroundColor: "blue" }}
    labeled={false}
    activeTintColor={"greyLight"}
    inactiveColor={"greyDark"}
    >
    <Tab.Screen name="Contacts" component={ContactsScreens}
        options={{
        tabBarIcon: 'format-list-bulleted',
        }}
    />
    <Tab.Screen name="Favorites" component={FavoriteScreens}
        options={{
        tabBarIcon: 'star-check',
        }}
    />
  </Tab.Navigator>
);
}
const App = () => {
return (
<Provider store={Store}>
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
</Provider>
);
}
export default App;