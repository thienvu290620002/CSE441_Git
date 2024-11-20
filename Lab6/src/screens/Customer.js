import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Customer = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState([]);
    const filePath = 'https://kami-backend-5rs0.onrender.com/customers';

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (route.params?.refresh) {
            fetchData();
            navigation.setParams({ refresh: false });
        }
    }, [route.params?.refresh]);

    const fetchData = () => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(d => {
                setData(d);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const goCustomerDetail = (item) => {
        navigation.navigate('CustomerDetail', { service: item });
    };

    return (
        <View style={{ flex: 1}}>
            <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', height: '80%'}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => goCustomerDetail(item)}
                            style={{
                                borderColor: 'lightgrey',
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10,
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20
                            }}>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={{color: 'grey'}}>Customer: </Text>{item.name}
                                </Text>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={{color: 'grey'}}>Phone: </Text>{item.phone}
                                </Text>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={{color: 'grey'}}>Total money: </Text> 
                                    <Text style={{color: '#E60861', fontWeight: 'bold'}}>{item.totalSpent} ₫</Text>
                                </Text>
                            </View>
                            <View style={{ flexShrink: 0, alignItems: 'center' }}>
                                <Icon name='person' size={20} color={'#E60861'}></Icon>
                                <Text style={{color: '#E60861', fontWeight: 'bold'}}>{item.loyalty}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item._id}
                />
                
            </View>
            <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Icon
                    name='add-circle'
                    style={{
                        alignItems: 'center',
                        marginRight: 0,
                        color: '#E60861',
                        fontSize: 30,
                        marginTop: 20,
                        textAlign: 'right'
                    }}
                    onPress={() => navigation.navigate('AddCustomer')} // Navigate to AddService
                />                       
            </View>
        </View>
    );
};

export default Customer;