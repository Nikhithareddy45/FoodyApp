import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../Colors'; 
const BottomTabBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name="home" size={22} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Categories')}>
        <FontAwesome5 name="th-large" size={22} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Cart')}>
        <FontAwesome5 name="shopping-cart" size={22} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome5 name="user" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.orange, 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
