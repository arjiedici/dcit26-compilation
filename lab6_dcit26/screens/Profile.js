import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Image,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Profile = ({ route }) => {
 
  const data = route.params;
  
  return( 
  <ScrollView style={styles.bg}>
    <View style={styles.align}>
      <Image style={styles.img} source={{ uri: data.picture.large }}/>
    </View>

    <View>
     <Text>{'\n'}</Text>
    </View>

    <View style={styles.align}>
      <Text style={styles.font}>{data.name.first} {data.name.last}</Text>
    </View>

    <View>
      <Text>{'\n'}</Text>
    </View>

    <View>
      <Text style={styles.profFont}>
        <Ionicons name='person-outline' size={22} color='black' />
         {'  '}About
    </Text>
    </View>

    
    <View style={styles.divider}/>

    <View>
      <Text>
        Age: {data.dob.age}
        {'\n'}
        Birthday: {data.dob.date}
        {'\n'}
        Gender: {data.gender}
        {'\n'}
        Address: {data.location.street.number} {data.location.street.name}
        {data.location.city} {data.location.state} {data.location.country}
        {'\n'}
        Postcode: {data.location.postcode}
        </Text>
      </View>

      <View style={styles.divider}/>

      <View>
        <Text style={styles.profFont}>
          <Ionicons name='mail-outline' size={22} color='black' />
         {'  '}Contact
        </Text>
      </View>

      <View>
        <Text>
        Email: {data.email}
        {'\n'}
        Username: {data.login.username}
        {'\n'}
        Telephone: {data.phone}
        {'\n'}
        Cellphone: {data.cell}
        </Text>
      </View>

    <View style={styles.divider}/>

     <View>
      <Text style={styles.profFont}>
        <Ionicons name='ellipsis-horizontal-outline' size={22} color='black' />
         {'  '}Other
      </Text>
    </View>

    <View>
      <Text>
      Date Registered: {data.registered.date}
      {'\n'}
      </Text>
    </View>


  </ScrollView>
  );
};

export default Profile;


const styles = StyleSheet.create({
 font: {
    fontFamily: 'Monospace',
    fontSize: 24,
    fontWeight: 'bold',

  },
  img: {
    width:250,
    height: 250,
    borderColor: 'blue',
    borderWidth: 5,
    marginTop: 20
  },
    bg: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  align: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profFont: {
    fontFamily: 'cursive',
    fontSize: 22,
    fontWeight: 'bold',
  },
  divider: {
    height: 3, 
    width: '100%',
    borderRadius: 2, 
    borderWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'dotted'

  }
  });