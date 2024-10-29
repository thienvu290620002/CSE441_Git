import React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, Button} from 'react-native';
import styles from './styles';
export default function Product() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';
  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) { 
          throw new Error('Networ......');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <View>
      <Text style={styles.headerIntro}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.body}>
              <View>
                <Image style={{width:100,height:100}} source={{uri: item.thumbnail}}></Image>
              </View>
              <View>
              <View>
                <Text style={{fontWeight:'bold',color:'black'}}>Title:{item.title}</Text>
                <Text>Description:{item.description}</Text>
                <Text>Price:{item.price}$</Text>
                <Text style={{color:'green'}}>Discount:{item.discountPercentage}off</Text>
                <Text>Rating: {item.rating}</Text>
                <Text>Stock: {item.stock}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:200}}>
                <Button title='DETAIL'></Button>
                <Button title='ADD'></Button>
                <Button title='DELETE'></Button>
              </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}