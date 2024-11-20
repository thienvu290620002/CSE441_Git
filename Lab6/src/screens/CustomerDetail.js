import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomerDetail = ({ navigation }) => {

    const route = useRoute();
    const { service } = route.params;
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    return (
        <View style={{ marginLeft: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Service name: </Text>
                <Text>{service.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Phone: </Text>
                <Text>{service.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Loyalty: </Text>
                <Text>{service.loyalty}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Total Spent: </Text>
                <Text>{service.totalSpent}</Text>
            </View>
        </View>
    );
};

export default CustomerDetail;