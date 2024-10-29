import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Text, TextInput, View } from 'react-native';
import styles from '../Question1/styles';

export default function Product_Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  const filePath = 'https://dummyjson.com/products/add';

  const handleSubmit = () => {
    fetch(filePath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the response
        Alert.alert('Add successful');
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        Alert.alert('Error adding product');
      });
  };

  return (
    <View>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Enter Discount Percentage"
        value={discountPercentage}
        onChangeText={(text) => setDiscountPercentage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        value={rating}
        onChangeText={(text) => setRating(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter stock"
        value={stock}
        onChangeText={(text) => setStock(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter brand"
        value={brand}
        onChangeText={(text) => setBrand(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter image URL(s)"
        value={images}
        onChangeText={(text) => setImages(text)}
      />
      </View>
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  );
}