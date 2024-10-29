import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import styles from '../Question1/styles';
import { Button, Card, Title } from 'react-native-paper';

const Product_Detail = () => {
    const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products'; // Corrected API URL

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.products); // Access the products array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

    return (
        <View>
          <Title style={styles.title}>Product Detail</Title>
          <FlatList
            data={data}
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
                <View style={{flexDirection:'row',marginLeft:'auto'}}>
                    <Button style={styles.btnDetail}>
                      <Text style={styles.txtDetail}>DELETE</Text>
                    </Button>
                    <Button style={styles.btnDetail}>CANCEL</Button>
                  </View>
              </Card>
            )}
          />
        </View>
      )
      };

export default Product_Detail
