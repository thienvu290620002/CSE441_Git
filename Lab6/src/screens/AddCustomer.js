// screens/AddService.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddCustomer = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

const handleAddService = async () => {
    const serviceData = {
        name: name,
        phone: phone,
    };

    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            Alert.alert('Error', 'No token found. Please log in again.');
            return;
        }

        const response = await axios.post(
            'https://kami-backend-5rs0.onrender.com/customers',
            serviceData,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        Alert.alert('Success', 'Customer added successfully', [
          { text: 'OK', onPress: () => navigation.navigate('Customer', { refresh: true }) }
        ]);
    } catch (error) {
        console.error('Error adding service:', error.response);
        Alert.alert('Error', error.response?.data?.message || 'Failed to add service');
    }
};

  return (
    <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
      <View>
        <Text>Customer name *</Text>
        <TextInput
          placeholder='Input your customer name'
          value ={name}
          onChangeText={setName}
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <View>
        <Text>Phone *</Text>
        <TextInput
          placeholder='Input phone number'
          value={phone}
          onChangeText={setPhone}
          keyboardType='numeric'
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <TouchableOpacity onPress={handleAddService} style={{ backgroundColor: '#E60861', padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCustomer;