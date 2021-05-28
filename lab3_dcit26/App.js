//BSCS 3-1
// Agcaoili, Denver
// Bacsal, Arnel
// Dela Cruz, Arjie

import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import ModalSample from './components/SampleModal'

export default function App() {
const [modalOpener , setModalOpener] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.center}>
        <Button title='CLICK ME' 
        onPress={() => setModalOpener(true)}/>

        <ModalSample visible={modalOpener} 
        onClose={() => setModalOpener(false)}/>
      </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    textAlign: 'center',
  },
  center: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
