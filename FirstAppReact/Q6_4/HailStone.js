import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

export default function HailStone(props) {
  const handleCal = () => {
    let number = +props.number
    let count = 0;
    // Alert.alert(`The minimum number is ${number/2}`)
    if(number > 0) {
        while(number >= 1) {
            if(number % 2 == 0) {
                // even
                while(number % 2 == 0) {
                    number = number / 2;
                    count++;
                }
                Alert.alert(`(EvenNumber)Hailstone is ${number},times of divide: ${count}`)
                break;
            } else {
                if(number == 1) {
                    Alert.alert(`(OddNumber)Hailstone is ${number},times of divide: ${count}`)
                } else {
                    number = number * 3 + 1;
                    while(number % 2 == 0) {
                        number = number / 2;
                        count++;
                    }
                    Alert.alert(`(OddNumber)Hailstone is ${number},times of multiply:and divide is ${count}`)
                }
            }
        }
    } else {
        Alert.alert("Please input a positive number")
    }
  }
  return (
    <View> 
      <Text>Your number is:</Text>
      <TextInput>{props.number}</TextInput>
      <Button onPress={handleCal} title='Do HailStoneton'></Button>
    </View>
  )
}
