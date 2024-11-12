import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation(); // Get the navigation object
    const [phone, setPhone] = useState(''); // State for phone number
    const [password, setPassword] = useState(''); // State for password
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        const data = {
            // phone: phone,
            // password: password 
            phone: '0373007856',
            password: '123'
        };
    
        const config = {
            method: 'post',
            url: 'https://kami-backend-5rs0.onrender.com/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        

        // Inside handleLogin function
        try {
            const response = await axios(config);
            setResponseData(response.data);
            console.log(response.data);
        
            // Store the token in AsyncStorage
            const token = response.data.token; // Adjust based on your API response structure
            await AsyncStorage.setItem('token', token);
        
            Alert.alert('Successful');
            navigation.navigate('Home'); // Navigate to Home on successful login
        } catch (err) {
            setError(err);
            console.error('Error:', err);
            Alert.alert('Login failed', 'Please check your credentials and try again.'); // Show error alert
        }
    };

    return (
        <View>
            <Text style={{ color: '#E60861', textAlign: 'center', marginTop: 150, fontSize: 40, fontWeight: 'bold' }}>Login</Text>
            <View style={{ marginTop: 30 }}>
                <TextInput
                    placeholder='Phone'
                    value={phone} // Bind state variable
                    onChangeText={setPhone} // Update state on change
                    style={{
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        borderRadius: 10,
                        width: 300,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 20
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder='Password'
                        value={password} // Bind state variable
                        onChangeText={setPassword} // Update state on change
                        secureTextEntry={true} // Hide password input
                        style={{
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                            borderRadius: 10,
                            width: 300,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />
                    <Icon name='visibility' size={24} style={{ textAlign: 'center', marginTop: 5, color: 'lightgrey', position: 'absolute', left: 290, top: 2 }} />
                </View>
            </View>
            <TouchableOpacity
                onPress={handleLogin} // Call handleLogin when pressed
                style={{
                    backgroundColor: '#E60861',
                    width: 300,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 10,
                    height: 35,
                    marginTop: 20
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;