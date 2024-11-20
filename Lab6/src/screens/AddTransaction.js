import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const AddTransaction = ({ navigation }) => {
  const route = useRoute();
  const { customerId } = route.params || {};
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceQuantity, setServiceQuantity] = useState('1'); // Default quantity
  const [services, setServices] = useState([]);

  // Check if customerId is available
  if (!customerId) {
    Alert.alert('Error', 'Customer ID is required.');
    return;
}

  const handleAddService = () => {
    if (!serviceName || !servicePrice || !serviceQuantity) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
    }

    const newService = {
        name: serviceName,
        price: parseFloat(servicePrice),
        quantity: parseInt(serviceQuantity, 10),
    };

    // Validate service data
    if (isNaN(newService.price) || isNaN(newService.quantity)) {
        Alert.alert('Error', 'Price and quantity must be valid numbers.');
        return;
    }

    setServices((prevServices) => [...prevServices, newService]);
    setServiceName('');
    setServicePrice('');
    setServiceQuantity('1');
};

const handleAddTransaction = async () => {
  if (services.length === 0) {
      Alert.alert('Error', 'At least one service is required.');
      return;
  }
console.log(customerId);

  const transactionData = {
      customerId: customerId, // Ensure this is set correctly
      services: services,
  };

  console.log('Transaction Data:', transactionData); // Log transaction data

  try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
          Alert.alert('Error', 'No token found. Please log in again.');
          return;
      }

      const response = await axios.get(
          'https://kami-backend-5rs0.onrender.com/transactions',
          transactionData,
          {
              headers: { Authorization: `Bearer ${token}` },
          }
      );

      Alert.alert('Success', 'Transaction added successfully', [
          { text: 'OK', onPress: () => navigation.navigate('Transaction', { refresh: true }) }
      ]);
  } catch (error) {
      console.error('Error adding transaction:', error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Failed to add transaction');
  }
};

  return (
    <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <View>
        <Text>Service Name *</Text>
        <TextInput
          placeholder='Input service name'
          value={serviceName}
          onChangeText={setServiceName}
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <View>
        <Text>Service Price *</Text>
        <TextInput
          placeholder='Input service price'
          value={servicePrice}
          onChangeText={setServicePrice}
          keyboardType='numeric'
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <View>
        <Text>Service Quantity *</Text>
        <TextInput
          placeholder='Input quantity'
          value={serviceQuantity}
          onChangeText={setServiceQuantity}
          keyboardType='numeric'
          style={{ backgroundColor: 'lightgrey', marginBottom: 10, padding: 10 }}
        />
      </View>
      <TouchableOpacity onPress={handleAddService} style={{ backgroundColor: '#E60861', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Service</Text>
      </TouchableOpacity>

      <FlatList
        data={services}
        keyExtractor={(item, index) => index.toString()} // Corrected here
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <Text>{item.name} (x{item.quantity})</Text>
            <Text>{item.price * item.quantity} ₫</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={handleAddTransaction} style={{ backgroundColor: '#E60861', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransaction;