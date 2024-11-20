import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState([]);
    const filePath = 'https://kami-backend-5rs0.onrender.com/services';

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

    const goDetailService = (item) => {
        navigation.navigate('ServiceDetail', { service: item });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#E60861', height: 60, flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: 'bold' }}>HUYỀN TRINH</Text>
                <Icon name='account-circle' size={24} style={{ textAlign: 'center', color: 'white', position: 'absolute', left: 310, top: 17 }} />
            </View>
            <Image
                source={require('../imgs/logo.png')}
                style={{
                    width: '100%',
                    height: 100,
                    marginTop: 20
                }}
            />
            <View style={{ width: '90%', height: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Danh sách dịch vụ</Text>
                    <Icon
                        name='add-circle'
                        style={{
                            position: 'absolute',
                            left: 300,
                            color: '#E60861',
                            fontSize: 20,
                        }}
                        onPress={() => navigation.navigate('AddService')} // Navigate to AddService
                    />
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => goDetailService(item)}
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
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, marginRight: 10 }}>
                                {item.name}
                            </Text>
                            <Text style={{ flexShrink: 0 }}>
                                {item.price}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    );
};

export default Home;