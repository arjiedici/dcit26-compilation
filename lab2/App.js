//BSCS 3-1
// Agcaoili, Denver
// Bacsal, Arnel
// Dela Cruz, Arjie

import React, { useState, useCallback, useRef } from 'react';
import {
  StyleSheet,Text, View,TextInput,Button, Alert,
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const itemHolder = (enteredItemList) => {
    setEnteredItem(enteredItemList);
  };
  const addItem = () => {
    if (enteredItem == '') {
      alert('No Item');
    } else setItemList([...itemList, enteredItem]);
    setEnteredItem('');
  };

  return (
    <View style={styles.Design}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSize}
          placeholder="Enter Item"
          onChangeText={itemHolder}
          value={enteredItem}
        />
        <Button style={styles.inputContainer} title="ADD" onPress={addItem} />
      </View>
      <View>
        {itemList.map((item) => (
          <View key={item} style={styles.listedItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Design: {
    padding: 10,
    flex: 1,
    backgroundColor: 'cadetblue',
  },
  inputContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'azure',
    borderRadius: 10,
    width: '85%',
  },
  inputSize: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    placeholderTextColor: 'cyan',
    borderRadius: 10,
  },
  listedItem: {
    padding: 10,
    backgroundColor: 'azure',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    
  },
});
