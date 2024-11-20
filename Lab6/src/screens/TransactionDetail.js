import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionDetail = ({ navigation }) => {
    const route = useRoute();
    const { service } = route.params || {}; // Default to an empty object
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (service && service.services) {
            const total = service.services.reduce((accumulator, eachService) => {
                return accumulator + (eachService.price * eachService.quantity);
            }, 0);
            setTotalPrice(total);
        }
    }, [service]);

    if (!service) {
        return <Text>No transaction data available.</Text>; // Handle the case when service is undefined
    }

    return (
        <View style={{ marginLeft: 'auto', marginRight: 'auto', width: '95%', marginTop: 10 }}>
            <View style={{backgroundColor: 'lightgrey', padding: 10, borderRadius: 5, marginBottom: 5}}>
                <Text style={{color: '#E60861', fontWeight: 'bold'}}>General information</Text>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Transaction code: </Text>
                    <Text>{service.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Customer: </Text>
                    <Text>{service.customer.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Creation time: </Text>
                    <Text>{new Date(service.createdAt).toLocaleString("en-US")}</Text>
                </View> 
            </View>

            <View style={{ marginTop: 10, marginBottom: 5, backgroundColor: 'lightgrey', padding: 10, borderRadius: 5 }}>
                <Text style={{color: '#E60861', fontWeight: 'bold'}}>Service List</Text>
                {service.services.map((eachService) => (
                    <View key={eachService._id} style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{flex: 1}}>
                            {eachService.name}
                        </Text>
                        <Text>{eachService.quantity}</Text>
                        <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}> {eachService.price * eachService.quantity} ₫</Text>
                    </View>
                ))}
                <View style={{ marginTop: 5,flexDirection: 'row' }}>
                    <Text style={{ color: 'grey', fontWeight: 'bold', flex: 1 }}>Total Price: </Text>
                    <Text style={{ fontWeight: 'bold', textAlign: 'right', flex: 1 }}>{totalPrice} ₫</Text>
                </View>
            </View>
            
            <View style={{ marginTop: 10, backgroundColor: 'lightgrey', padding: 10, borderRadius: 5 }}>
                <Text style={{color: '#E60861', fontWeight: 'bold'}}>Cost</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1}}>Amount of money</Text>
                    <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}>{totalPrice} ₫</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1}}>Discount</Text>
                    <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}>- {Math.floor(totalPrice*0.05)} ₫</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontWeight: 'bold'}}>Total Payment</Text>
                    <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold', color: '#E60861'}}>{totalPrice-(Math.floor(totalPrice*0.05))} ₫</Text>
                </View>
            </View>
        </View>
    );
};

export default TransactionDetail;