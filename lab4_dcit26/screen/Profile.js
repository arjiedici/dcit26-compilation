import React from 'react';
import { View, StyleSheet, Button, Image, ImageBackground, ScrollView, Text } from 'react-native';


const Profile = ({navigation}) => {
  return (
      <ImageBackground style={styles.container} source={require('../assets/black_1.jpg')}>

      <ScrollView>

      <View style={styles.container}>
       <Image style={styles.image}source={require('../assets/unity.gif')}/>
      </View>

      <View>
        <Text style={styles.text1}>
        Who are we?!
        </Text>
      </View>

      <View>
      <Text style={styles.text}>
      {'\t\t\t'}We believe the world is a better place with more creators in it. This is at the core of our business because we believe our technology can change the world. Our products give content creators the tools to not just entertain but to create innovative RT3D experiences and deliver better processes for almost every industry.{'\n\n'}
      </Text>
      </View>

      <View>
       <Text style={styles.text1}>
        Unity Values
       </Text>
      </View>
       
      <View>
       <Text style={styles.text2}>
        Users First
       </Text> 
      </View>

      <View>
       <Text style={styles.text}>
{'\t\t'}We put users first… they are rock stars and we are their biggest fans. Our shared dedication to users holds us together, defines and aligns our work and drives us to deliver for them.{'\n\n'}
       </Text>
      </View>

      <View>
       <Text style={styles.text2}>
        Best ideas win
       </Text> 
      </View>

      <View>
       <Text style={styles.text}>
{'\t\t'}We believe great ideas can come from anywhere. We have vigorous debates, we listen and learn, and we make sure the best ideas win. We care enough to go through the pain of messy conversations.{'\n\n'}
       </Text>
      </View>

      <View>
       <Text style={styles.text2}>
        In it together
       </Text> 
      </View>

      <View>
       <Text style={styles.text}>
{'\t\t'}We are Citizens of Unity. We act like owners. We’re activists; we have a voice and use it. We’re direct and candid, with good intent. We respect each other’s uniqueness and we’re in it together.{'\n\n'}
       </Text>
      </View>

      <View>
       <Text style={styles.text2}>
        Go bold
        </Text> 
      </View>

      <View>
       <Text style={styles.text}>
{'\t\t'}We do bold things. We go big and when we fail, we learn, get better and go big again. We challenge and elevate each other beyond our limits to do what may seem impossible. We stay curious and hungry.
       </Text>
      </View>

      

     <View style={styles.container}>
       <Button title="About" onPress={() => navigation.navigate('About')} />
     </View>
    </ScrollView>
    </ImageBackground>
  );
}


export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    text:{
    textAlign: 'justify',
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'white',
    padding: 10
  }, 
  text1:{
    textAlign: 'justify',
    padding: 10,
    fontSize: 50,
    fontFamily: 'cursive',
    color: 'white',
    fontWeight: 'bold',
  },
    text2:{
    textAlign: 'justify',
    padding: 10,
    fontSize: 30,
    fontFamily: 'fantasy',
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300
  }
})




