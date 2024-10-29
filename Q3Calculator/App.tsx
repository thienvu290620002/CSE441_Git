import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Style';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('')

  const handleNumber = (num) => {
    if(displayValue == '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if(operator == '+') {
      setDisplayValue((num1 + num2).toString());
    } else if(operator == '-') {
      setDisplayValue((num1 - num2).toString());
    } else if(operator == '*') {
      setDisplayValue((num1 * num2).toString());
    } else if(operator == '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.display}>{displayValue}</Text>
      <View style={Styles.buttonContainer}>
        <View style={Styles.buttonRow}>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(7)}>
            <Text style={Styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(8)}>
            <Text style={Styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(9)}>
            <Text style={Styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleOperatorInput('/')}>
            <Text style={[Styles.buttonText, Styles.buttonOperator]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonRow}>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(4)}>
            <Text style={Styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(5)}>
            <Text style={Styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(6)}>
            <Text style={Styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleOperatorInput('*')}>
            <Text style={[Styles.buttonText, Styles.buttonOperator]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonRow}>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(1)}>
            <Text style={Styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(2)}>
            <Text style={Styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleNumber(3)}>
            <Text style={Styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleOperatorInput('-')}>
            <Text style={[Styles.buttonText, Styles.buttonOperator]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonRow}>
          <TouchableOpacity style={[Styles.button, Styles.zeroButton]} onPress={() => handleNumber(0)}>
            <Text style={Styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={() => handleOperatorInput('+')}>
            <Text style={[Styles.buttonText, Styles.buttonOperator]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={handleEqual}>
            <Text style={[Styles.buttonText, Styles.buttonOperator]}>=</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity onPress={() => handleClear()}>
            <Text style={Styles.buttonClear}>C</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;