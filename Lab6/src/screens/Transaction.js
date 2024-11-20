import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Transaction = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState([]);
    const filePath = 'https://kami-backend-5rs0.onrender.com/transactions';

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

    const goTransactionDetail = (item) => {
        navigation.navigate('TransactionDetail', { service: item });
    };

    return (
        <View style={{ flex: 1}}>
            <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', height: '80%'}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => goTransactionDetail(item)}
                            style={{
                                borderColor: 'lightgrey',
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10,
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                display: 'flex'
                            }}>
                            <View style={{flex: 2, maxWidth: '90%'}}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                    {item.id} - {new Date(item.createdAt).toLocaleString("en-US")}
                                </Text>
                                {item.services.map((service) => (
                                    <Text key={service._id} numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                        - {service.name}
                                    </Text>
                                ))}
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={{color: 'grey'}}>Customer: {item.customer.name}</Text> 
                                </Text>
                            </View>
                            <View style={{ flexShrink: 0, justifyContent: 'center', marginRight: 10, flex: 1}}>
                                <Text style={{color: '#E60861', fontWeight: 'bold', textAlign: 'right'}}>{item.price} ₫</Text>
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
                    // onPress={() => navigation.navigate('AddTransaction', { customerId: selectedCustomerId })}
                    onPress={() => navigation.navigate('AddTransaction', { customerId: data[0]?.customer._id })} // Assuming you want to use the first customer's ID
                />                       
            </View>
        </View>
    );
};

export default Transaction;