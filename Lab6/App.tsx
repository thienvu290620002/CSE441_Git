// import 'react-native-gesture-handler';
// import React, { useState } from 'react';
// import { Provider } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Login from './src/screens/Login';
// import Customer from './src/screens/Customer';
// import AddCustomer from './src/screens/AddCustomer';
// import ServiceDetail from './src/screens/ServiceDetail';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Transaction from './src/screens/Transaction';
// import TransactionDetail from './src/screens/TransactionDetail';
// import Home from './src/screens/Home';
// import store from './src/store/store';
// import CustomerDetail from './src/screens/CustomerDetail';
// import Setting from './src/screens/Setting';
// import AddService from './src/screens/AddService';
// import EditService from './src/screens/EditService';
// import AddTransaction from './src/screens/AddTransaction';

// const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

// function CustomerScreens() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Customer"
//       screenOptions={{ headerShown: true }}
//     >
//       <Stack.Screen name='Customer' component={Customer}
//         options={{ title: "Customer" }} />
//       <Stack.Screen
//         name='AddCustomer'
//         component={AddCustomer}
//         options={{ title: "AddCustomer" }}
//       />
//       <Stack.Screen
//         name='CustomerDetail'
//         component={CustomerDetail}
//         options={{ title: "CustomerDetail" }}
//       />
//     </Stack.Navigator>
//   );
// }

// function HomeScreens() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: true }}
//     >
//       <Stack.Screen name='Home' component={Home}
//         options={{ title: "Home" }} />
//       <Stack.Screen
//         name='ServiceDetail'
//         component={ServiceDetail}
//         options={{ title: "ServiceDetail" }}
//       />
//       <Stack.Screen
//         name='AddService'
//         component={AddService}
//         options={{ title: "AddService" }}
//       />
//       <Stack.Screen
//         name='EditService'
//         component={EditService}
//         options={{ title: "EditService" }}
//       />
//     </Stack.Navigator>
//   );
// }

// function TransactionScreens() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Transaction"
//       screenOptions={{ headerShown: true }}
//     >
//       <Stack.Screen 
//         name='Transaction' 
//         component={Transaction}
//         options={{ title: "Transaction" }} />
//       <Stack.Screen
//         name='TransactionDetail'
//         component={TransactionDetail}
//         options={{ title: "TransactionDetail" }}
//       />
//       <Stack.Screen
//         name='AddTransaction'
//         component={AddTransaction}
//         options={{ title: "AddTransaction" }}
//       />
//     </Stack.Navigator>
//   );
// }

// function LogoutScreens() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Setting"
//       screenOptions={{ headerShown: true }}
//     >
//       <Stack.Screen name='Setting' component={Setting}
//         options={{ title: "Setting" }} />
//     </Stack.Navigator>
//   );
// }

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName='Login'
//       barStyle={{ backgroundColor: "white" }}
//       labeled={true}
//       activeTintColor={"greyLight"}
//       inactiveColor={"greyDark"}
//     >
//       <Tab.Screen 
//         name="HomeScreens" 
//         component={HomeScreens}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={24} />
//           ),
//           tabBarLabel: 'Home',
//         }}
//       />
      
//       <Tab.Screen 
//         name="TransactionScreens" 
//         component={TransactionScreens}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="store" color={color} size={24} />
//           ),
//           tabBarLabel: 'Transaction',
//         }}
//       />

//       <Tab.Screen 
//         name="CustomerScreens" 
//         component={CustomerScreens}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="group" color={color} size={24} />
//           ),
//           tabBarLabel: 'Customer',
//         }}
//       />
//       <Tab.Screen 
//         name="LogoutScreens" 
//         component={LogoutScreens}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="meeting-room" color={color} size={24} />
//           ),
//           tabBarLabel: 'Setting',
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName={isLoggedIn ? "TabNavigator" : "Login"}
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="Login">
//             {() => <Login onLoginSuccess={handleLoginSuccess} />}
//           </Stack.Screen>
//           <Stack.Screen name="TabNavigator" component={TabNavigator} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/screens/Login';
import Customer from './src/screens/Customer';
import AddCustomer from './src/screens/AddCustomer';
import ServiceDetail from './src/screens/ServiceDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Transaction from './src/screens/Transaction';
import TransactionDetail from './src/screens/TransactionDetail';
import Home from './src/screens/Home';
import store from './src/store/store';
import CustomerDetail from './src/screens/CustomerDetail';
import Setting from './src/screens/Setting';
import AddService from './src/screens/AddService';
import EditService from './src/screens/EditService';
import AddTransaction from './src/screens/AddTransaction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function CustomerScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Customer"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name='Customer' component={Customer}
        options={{ title: "Customer" }} />
      <Stack.Screen
        name='AddCustomer'
        component={AddCustomer}
        options={{ title: "AddCustomer" }}
      />
      <Stack.Screen
        name='CustomerDetail'
        component={CustomerDetail}
        options={{ title: "CustomerDetail" }}
      />
    </Stack.Navigator>
  );
}

function HomeScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name='Home' component={Home}
        options={{ title: "Home" }} />
      <Stack.Screen
        name='ServiceDetail'
        component={ServiceDetail}
        options={{ title: "ServiceDetail" }}
      />
      <Stack.Screen
        name='AddService'
        component={AddService}
        options={{ title: "AddService" }}
      />
      <Stack.Screen
        name='EditService'
        component={EditService}
        options={{ title: "EditService" }}
      />
    </Stack.Navigator>
  );
}

function TransactionScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Transaction"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen 
        name='Transaction' 
        component={Transaction}
        options={{ title: "Transaction" }} />
      <Stack.Screen
        name='TransactionDetail'
        component={TransactionDetail}
        options={{ title: "TransactionDetail" }}
      />
      <Stack.Screen
        name='AddTransaction'
        component={AddTransaction}
        options={{ title: "AddTransaction" }}
      />
    </Stack.Navigator>
  );
}

function LogoutScreens({ onLogout }) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name='Setting'>
        {() => <Setting onLogout={onLogout} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const TabNavigator = ({ onLogout }) => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreens'
      barStyle={{ backgroundColor: "white" }}
      labeled={true}
      activeTintColor={"greyLight"}
      inactiveColor={"greyDark"}
    >
      <Tab.Screen 
        name="HomeScreens" 
        component={HomeScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      
      <Tab.Screen 
        name="TransactionScreens" 
        component={TransactionScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="store" color={color} size={24} />
          ),
          tabBarLabel: 'Transaction',
        }}
      />

      <Tab.Screen 
        name="CustomerScreens" 
        component={CustomerScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="group" color={color} size={24} />
          ),
          tabBarLabel: 'Customer',
        }}
      />
      
      <Tab.Screen 
        name="LogoutScreens" 
        component={() => <LogoutScreens onLogout={onLogout} />}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="meeting-room" color={color} size={24} />
          ),
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    // Clear user data from AsyncStorage or any other storage
    await AsyncStorage.removeItem('token'); // Adjust this based on your storage keys
    await AsyncStorage.removeItem('userData'); // If you store user data, clear it too
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? "TabNavigator" : "Login"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login">
            {() => <Login onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
          <Stack.Screen name="TabNavigator">
            {() => <TabNavigator onLogout={handleLogout} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;