import React from 'react';
import { View, Text, TextInput, Image, StyleSheet , TouchableOpacity, Linking} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../Colors';
import { useState } from 'react';
const Login = ({ navigation }) => {
  const handlePress = () => {
    Linking.openURL("https://www.google.com");
  };
   const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
  const userLogin = async () =>{
    const users = await firestore().collection('login')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={require('../../assets/images/login.png')} />

      <Text style={styles.subText}>Login</Text>
      <View style={[styles.inputContainer]}>
        <FontAwesome name="user" size={18} color="#FFF" style={styles.icon} />
        <TextInput placeholder="Email" placeholderTextColor="#FFF" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={18} color="#FFF" style={styles.icon} />
        <TextInput placeholder="Password" placeholderTextColor="#FFF" secureTextEntry={true} style={styles.input} />
      </View>
      <Text style={styles.subTitle}>Forgot Password?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Index')}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>       
        <View style={styles.signupwrap}>
          <View style={styles.whitebg}>
              <TouchableOpacity style={[styles.Google]} onPress={handlePress}>
                  <FontAwesome name="google" size={24} style={[styles.icon,styles.googleIcon]} />
                      <Text style={styles.googleText}>Continue with Google</Text>
                  </TouchableOpacity>
          </View>
          <Text style={styles.acc}>or</Text>
          <View style={styles.accFlex}>
            <Text style={styles.accText}>Create an Account?</Text>
            <TouchableOpacity style={[styles.accText]}  onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.accTextLogin}>Sign Up</Text>
            </TouchableOpacity>
         </View>
        </View>
    </View>
  );
};

export default Login;


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
    width: '75%',
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
  acc:{
    color:Colors.white,
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
  signupwrap:{
    height:160,
    width:'100%',
    borderRadius:15,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:10,
  },
  Google:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    width:'200',
    height:'50',
    borderRadius:5,
    borderColor:Colors.orange,
    borderWidth:2,
  },
  googleText:{
    color:Colors.white,
  },
  googleIcon:{
    color:Colors.white,
  }
});

