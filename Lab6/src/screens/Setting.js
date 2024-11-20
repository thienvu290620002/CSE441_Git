import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Setting = ({ onLogout }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    // Clear user data from AsyncStorage or any other storage
    await AsyncStorage.removeItem('token'); // Adjust this based on your storage keys
    await AsyncStorage.removeItem('userData'); // If you store user data, clear it too

    // Confirm logout and navigate back to the Login screen
    Alert.alert("Logged out", "You have successfully logged out.", [
      {
        text: "OK",
        onPress: () => {
          onLogout(); // Call the logout handler
          navigation.navigate('Login'); // Navigate back to the Login screen
        }
      }
    ]);
  };

  return (
    <View>
      <TouchableOpacity 
        style={{
          backgroundColor: '#E60861',
          width: 100, 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          padding: 5, 
          borderRadius: 10, 
          marginTop: 20
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;