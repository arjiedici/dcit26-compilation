import React from 'react';
import { View, StyleSheet, Button, ImageBackground, ScrollView, } from 'react-native';


const Home = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/changing.gif')}>
   
    
    <View style={styles.container}>
    <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  
    </ImageBackground>

  
  );
}


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
})

