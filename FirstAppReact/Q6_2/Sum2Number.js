import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

const Sum2Number = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [total, setTotal] = useState(0);
  
    const handleCalculate = () => {
      const inputArray = inputValue.split('');
      const firstDigit = parseInt(inputArray[0], 10);
      const lastDigit = parseInt(inputArray[inputArray.length - 1], 10);
      const sum = firstDigit + lastDigit;
      setTotal(sum);
        Alert.alert(`The sum is: ${total}`); // Use template literal for clear message
    }

  return (
    <View> 
            <Text>This is the sum of two numbers:</Text>
            <Text>Digit 1:</Text>
            <TextInput>{props.digit1}</TextInput>
            <Text>Digit 2:</Text>
            <TextInput>{props.digit2}</TextInput>
            {/* <Text>The Result is:</Text>
            <Text>{+props.digit1 + +props.digit2}</Text> */}
            <Button onPress={handleCalculate} title="Calculate"></Button>
        </View>
  )
}

export default Sum2Number