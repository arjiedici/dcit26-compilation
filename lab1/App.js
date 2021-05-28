//Denver Agcaoili
//Arnel Bacsal JR.
//Arjie Dela Cruz
//+1

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  } from 'react-native'


export default function App() {
  return (
    <View style={style.container}>
    <Text style = {{
      fontSize : 50 ,
      fontWeight: 'bold' ,
      color: 'white',
      fontFamily : 'cursive'
     
    }}>
     Hello World
    </Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: 'center' ,
     justifyContent: 'center' ,
     backgroundColor: 'black',
  }
})