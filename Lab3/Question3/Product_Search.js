import React, { useState } from 'react'
import { Button, FlatList, Image, Text, View } from 'react-native';
import styles from '../Question1/styles';
import { Card, TextInput, Title } from 'react-native-paper';

const Product_Search = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products';
    const searchProduct = () => {
    if(value!='')
    filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
    .then((response) => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then((d) => {
    setData(d.products)
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
    });
    };
    return (
        <View>
          <Title style={styles.title}>Search Products</Title>
          <TextInput
            style={{ backgroundColor: '#fff'}}
            value={value}
            onChangeText={setValue}
            placeholder="Enter product name"
          />
          <Button title='SEARCH' onPress={searchProduct}/>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card>
                <Card.Content>
                  <View style={{backgroundColor:'black',alignItems:'center',height:120,borderRadius: 10}}>
                    <Image
                      style={styles.imgBox}
                      source={{ uri: item.thumbnail }}
                    />
                  </View>
                  <Title>{item.title}</Title>
                  <Text>Description: {item.description}</Text>
                  <Text>Price: {item.price}$</Text>
                  <Text style={styles.discount}>
                    Discount: {item.discountPercentage} off
                  </Text>
                  <Text>Rating: {item.rating}</Text>
                  <Text>Stock: {item.stock}</Text>
                  <Text>Brand: {item.brand}</Text>
                  <Text>Category: {item.category}</Text>
                </Card.Content>
              </Card>
            )}
          />
        </View>
      )
      };

export default Product_Search
