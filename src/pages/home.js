import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../Colors'; 

const Home = ({ navigation }) => {
  return (
    <View style={ styles.container}>

      <Image source={require('../../assets/images/favicon.png')} style={styles.image} />

      <Text style={styles.mainText}>Welcome to Foody</Text>
      <Text style={styles.subText}>A Delicious Food Delivery App</Text>

      <TouchableOpacity style={styles.getStarted} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:Colors.maincolor,
  },
  mainText: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subText: {
    fontSize: 20,
    color: Colors.white,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius:50,
  },
  getStarted: {
    backgroundColor: Colors.red,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
