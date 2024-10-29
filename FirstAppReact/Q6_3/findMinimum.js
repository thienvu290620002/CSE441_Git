import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

export default function FindMinimum(props) {
  const handleMinimum = () => {
    const number1 = +props.number1
    const number2 = +props.number2
    const number3 = +props.number3

    let minimum = number1
    if(minimum > number2) {
      minimum = number2;
    }
    if(minimum > number3) {
      minimum = number3;
    }

    Alert.alert(`The minimum number is ${minimum}`)

  }
  return (
    <View> 
      <Text>Number 1:</Text>
      <TextInput>{props.number1}</TextInput>
      <Text>Number 2:</Text>
      <TextInput>{props.number2}</TextInput>
      <Text>Number 3:</Text>
      <TextInput>{props.number3}</TextInput>
      <Button onPress={handleMinimum} title='Find The Minimum'></Button>
    </View>
  )
}
