import React from 'react';
import { View, StyleSheet, Button, Image, ImageBackground, ScrollView, Text} from 'react-native';



const About = ({navigation}) => {
  return (
       <ImageBackground style={styles.container} source={require('../assets/black_3.jpg')}>
      <ScrollView>

      <View>
       <Image style={styles.image} source={require('../assets/unity_1.png')}/>
      </View>
      
      <View>
        <Text style={styles.text1}>
        How we live our values
        </Text>
      </View>

      <View>
       <Text style={styles.text2}>
        Empathy
       </Text> 
      </View>

      <View>
       <Text style={styles.text}>
{'\t\t'}We recognize and validate the perspectives and experiences of others, even without connecting ourselves to those experiences. It’s about listening to understand, not to respond.{'\n\n'}
       </Text>
      </View>

      <View>
        <Text style={styles.text2}>
          Who we are
        </Text>
      </View>

      <View>
      <Text style={styles.text}>
     {'\t\t\t'}We believe the world is a better place with more creators in it. This is at the core of our business because we believe our technology can change the world. Our products give content creators the tools to not just entertain but to create innovative RT3D experiences and deliver better processes for almost every industry.{'\n\n'}
      </Text>
      </View>

      <View>
       <Text style={styles.text2}>
          Respect
       </Text>
      </View>

      <View>
      <Text style={styles.text}>
     {'\t\t\t'}We root our efforts in empathy by taking everyday actions that acknowledge individual experiences and perspectives.{'\n\n'}
      </Text>
      </View>

      <View>
       <Text style={styles.text2}>
          Opportunity
       </Text>
      </View>

      <View>
      <Text style={styles.text}>
     {'\t\t\t'}We demonstrate respect for the knowledge and experience of others by empowering them to contribute, create, or lead based on their knowledge and experience.{'\n\n'}
      </Text>
      </View>

    <View>
      <Text style={styles.text1}>
        Our impact by numbers
      </Text>
    </View>

    <View>
      <Image style={styles.image} source={require('../assets/additional.gif')}/>
    </View>


    <View>
      <Text style={styles.text2}>
       {'\t\t'} In 2020 
      </Text>
    </View>

     <View>
      <Text style={styles.text}>
       {'\t\t'} 5B downloads per month of apps built with Unity
downloads per month of apps built with Unity{'\n'}
      </Text>
    </View>

    <View>
     <Text style={styles.text}>
       {'\t\t'} 71% of the top 1,000 mobile games were made with Unity
of the top 1,000 mobile games were made with Unity{'\n'}
     </Text>
    </View>

    <View>
     <Text style={styles.text}>
      {'\t\t'} 50%+ of games across mobile, PC, and console were made with Unity 
of games across mobile, PC, and console were made with Unity{'\n'}
     </Text>
    </View>

    <View>
     <Text style={styles.text}>
      {'\t\t'} 2.5B  monthly active users who consumed content created or operated with Unity solutions
monthly active users who consumed content created or operated with Unity solutions{'\n'}
     </Text>
    </View>

    <View>
     <Text style={styles.text}>
    {'\t\t'} 20+ different platforms run Unity creations{'\n'}
     </Text>
    </View>

    <View>
     <Text style={styles.text}>
     {'\t\t'} 190+ countries and territories have Unity creators{'\n'}
     </Text>
    </View>
 

      <View style={styles.container}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      </ScrollView>
      </ImageBackground>
  );
}

export default About;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign: 'justify',
    padding: 10,
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'white'
  },
  text1:{
    textAlign: 'justify',
    padding: 10,
    fontSize: 50,
    fontFamily: 'cursive',
    color: 'white',
    fontWeight: 'bold'
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

}
);