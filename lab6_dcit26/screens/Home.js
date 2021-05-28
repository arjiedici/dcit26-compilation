import React, {useState, useEffect} from "react";
import {View,Text,Button,StyleSheet,ActivityIndicator,Image,TouchableOpacity,} from "react-native";

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState([true]);

  function fecthRandomData() {
  setLoading(true);
    fetch('https://randomuser.me/api')
    .then ((response) => response.json())
    .then ((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fecthRandomData();
  }, []);

  return(
    <View style={styles.bg}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
        { isLoading ? <ActivityIndicator size="large" color="red"/> : (
          <Image style={styles.img} source={{uri: data.picture.large}} />
       )}
        </TouchableOpacity>
      </View>

      <View>
        <Text>{'\n'}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
        { isLoading ? <ActivityIndicator size="large" color="red"/> : (
        <Text style={styles.font}>{data.name.first} {data.name.last}</Text>
      )}
        </TouchableOpacity>
      </View>

      <View>
        <Text>{'\n'}</Text>
      </View>

      <View>
        <Button title="Random User" color="darkblue" onPress={() =>                    {fecthRandomData()} } />
      </View>
      
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue'
  },
  img: {
    width:315,
    height: 420,
    borderColor: 'blue',
    borderWidth: 5,
  },
  font: {
    fontFamily: 'fantasy',
    fontSize: 24
  },
});