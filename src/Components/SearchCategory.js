import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../Colors'; 

const Header = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.avatartext}>
        <Text style={styles.logo}>Foody</Text>

        <TouchableOpacity>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        </TouchableOpacity>

      </View>
     <View style={styles.searchContainer}>
        <TouchableOpacity>
            <FontAwesome name="search" size={20} color="#FFF" />
          </TouchableOpacity>
        <TextInput placeholder="Search here" placeholderTextColor="#FFF" style={styles.searchInput} />
     </View>
   </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    height:150,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.maincolor,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width:'100%',
  },
  avatartext:{
    flex:1,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'85%',
  },
  logo: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius:25,
    paddingLeft:20,
    borderColor:Colors.orange,
    borderWidth:1,
    backgroundColor: Colors.shadow,
    marginTop:10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
