import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AddService = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

const handleAddService = async () => {
    const serviceData = {
        name: name, 
        price: price 
    };

    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            Alert.alert('Error', 'No token found. Please log in again.');
            return;
        }

        const response = await axios.post(
            'https://kami-backend-5rs0.onrender.com/services',
            serviceData,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        Alert.alert('Success', 'Service added successfully', [
          { text: 'OK', onPress: () => navigation.navigate('Home', { refresh: true }) }
        ]);
    } catch (error) {
        console.error('Error adding service:', error.response);
        Alert.alert('Error', error.response?.data?.message || 'Failed to add service');
    }
};

  return (
    <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <View>
        <Text>Service name *</Text>
        <TextInput
          placeholder='Input a service name'
          value ={name}
          onChangeText={setName}
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <View>
        <Text>Price *</Text>
        <TextInput
          placeholder='Input a price'
          value={price}
          onChangeText={setPrice}
          keyboardType='numeric'
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <TouchableOpacity onPress={handleAddService} style={{ backgroundColor: '#E60861', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddService;