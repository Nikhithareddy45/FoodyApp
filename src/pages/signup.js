import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../Colors'; 
const Signup = ({ navigation }) => { 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
    return (
        <View style={styles.container}>
          <Image style={styles.imageContainer} source={require('../../assets/images/signup.png')} />
    
          <Text style={styles.subText}>Sign Up</Text>
          <View style={[styles.inputContainer]}>
            <FontAwesome name="user" size={18} color="#FFF" style={styles.icon} />
            <TextInput placeholder="Username" value={name} placeholderTextColor="#FFF" style={styles.input} onChangeText={txt=> setName(txt)}/>
          </View> 

          <View style={[styles.inputContainer]}>
            <FontAwesome name="user" size={18} color="#FFF" style={styles.icon} />
            <TextInput placeholder="Email" placeholderTextColor="#FFF" value={password} style={styles.input} onChangeText={txt=> setPassword(txt)}/>
          </View>
    
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={18} color="#FFF" style={styles.icon} />
            <TextInput placeholder="Password" placeholderTextColor="#FFF" secureTextEntry={true} value={password} style={styles.input} onChangeText={txt=> setPassword(txt)} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={18} color="#FFF" style={styles.icon} />
            <TextInput placeholder="Confirm Password" placeholderTextColor="#FFF" secureTextEntry={true} style={styles.input} />
          </View> 

            <TouchableOpacity style={styles.loginButton} onPress={() => {
               if(email !== '' && password !== ' '){
               }else{
                alert('Please Enter Data')
               }
            }}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <View style={styles.accFlex}>
                        <Text style={styles.accText}>Already have an Account?</Text>
                        <TouchableOpacity style={[styles.accText]}  onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.accTextLogin}>Login</Text>
                        </TouchableOpacity>
            </View>
        </View>
      );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor:Colors.maincolor,
          padding:30,
          width:'100%',
          position:'relative'
    },
    imageContainer: {
      width: 100,
      height: 100,
      borderRadius:50,
      margin:2,
    },
    subText:{
      fontSize:40,
      color:Colors.orange,
      margin:3,
      fontWeight:'bold',
    },
    subTitle: {
      fontSize: 18,
      color: Colors.white,
      margin: 5,
      
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.shadow,
      borderRadius: 15,
      paddingHorizontal: 15,
      marginVertical: 10,
      width: '85%',
      height: 50,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      color:Colors.white,
    }, 
    loginButton: {
      backgroundColor: Colors.red,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
    accFlex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:5,
      },
      accText:{
        color:Colors.white,
        fontSize:16,
      },
      accTextLogin:{
        color:Colors.orange,
        fontSize:16,
      },
  });
  