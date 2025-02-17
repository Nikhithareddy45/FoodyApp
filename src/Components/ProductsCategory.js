import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../Colors';
import { useNavigation } from '@react-navigation/native';
// import {ProductDescription} from './ProductDescription';
const foodItems = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    subname: 'Mushroom, Sausages, Bell Pepper, Olive, Corn',
    location: 'Ahmed Bin Hondid Road',
    rating: 4.6,
    price: 30,
    image: require('../../assets/images/pepperoni-pizza.png'),
    category:'pizza',
  },
  {
    id: 2,
    name: 'Crispy Mixed Pizza',
    subname: 'Olives, Sausage',
    location: 'FastFood Road Racine',
    rating: 4.2,
    price: 28,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'pizza',
  },
  {
    id: 3,
    name: 'Chicken Burger',
    subname: 'Cheese, Salad',
    location: 'FastFood Road Racine',
    rating: 3.1,
    price: 30,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'burger',
  },
  {
    id: 4,
    name: 'American Burger',
    subname: 'Cheese, Onions,Tomato',
    location: 'FastFood Road Racine',
    rating: 4.1,
    price: 40,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'burger',
  },
  {
    id: 5,
    name: 'Chicken Sandwich',
    subname: 'Bread, Onions,Chicken',
    location: 'Chicken Bytes ',
    rating: 3.8,
    price: 27,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'sandwich',
  },
  {
    id: 6,
    name: 'Veg Sandwich',
    subname: 'Bread, Tomato',
    location: 'FastFood Road Racine',
    rating: 3.95,
    price: 22,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'sandwich',
  },
  {
    id: 7,
    name: 'Prawns Noodles',
    subname: 'Prawns, Tomato',
    location: 'One More Byte Street Food',
    rating: 4.5,
    price: 30,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'Noodles',
  },
  {
    id: 8,
    name: 'Chicken Noodles',
    subname: 'Chicken, Egg,Mirchi,Lemon',
    location: 'Aadhya FastFood Centre',
    rating: 4.3,
    price: 28,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'Noodles',
  },
  {
    id: 9,
    name: 'Chicken Nuggets',
    subname: 'Salt,Black pepper',
    location: 'One More Byte Street Food',
    rating: 3.5,
    price: 22,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'Noodles',
  },
  {
    id: 10,
    name: 'Chicken Fry Nuggets',
    subname: 'Nuggets with Ketchup',
    location: 'Aadhya FastFood Centre',
    rating: 4.25,
    price: 26,
    image: require('../../assets/images/crispy-mixed-pizza.png'),
    category:'Noodles',
  },
];

const PopularFoods = () => {
  const navigation = useNavigation();
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Foods</Text>
        {/* <Text style={styles.viewAll}>View All &gt;</Text> */}
      </View>

      <View style={styles.foodContainer}>
        {foodItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('#', { food: item })} // ✅ Navigate on click
          >
            {/* Heart (Like) Button */}
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => toggleLike(item.id)}
            >
              <FontAwesome 
                name={likedItems[item.id] ? "heart" : "heart-o"} 
                size={18} 
                color={likedItems[item.id] ? "red" : "gray"} 
              />
            </TouchableOpacity>

            <Image source={item.image} style={styles.image} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.subName}>{item.subname}</Text>

            <View style={styles.locationRow}>
              <FontAwesome5 name="map-marker-alt" size={12} color="red" />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>

            <View style={styles.ratingRow}>
              <View style={styles.ratingView}>
                <FontAwesome5 name="star" size={12} color="#f4c430" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.cartButton}>
              <FontAwesome5 name="shopping-cart" size={16} color="#FFF" />
              <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PopularFoods;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.maincolor,
    borderRadius: 15,
    marginHorizontal: 10,
    color:Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  viewAll: {
    fontSize: 14,
    color: '#E63946',
  },
  foodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    margin: 5,
  },
  card: {
    backgroundColor:Colors.shadow,
    borderBlockStartColor:Colors.orange,
    backgroundColor: Colors.white,
    borderWidth:2,
    borderRadius: 15,
    padding: 12,
    width: '48%',
    alignItems: 'center',
    position: 'relative',
    color:Colors.white,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subName: {
    fontSize: 10,
    textAlign: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 10,
    color: '#888',
    marginLeft: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    justifyContent: 'space-between',
    width: '90%',
  },
  ratingText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
  },
  ratingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.red,
  },
  cartButton: {
    flexDirection: 'row',
    backgroundColor: Colors.red,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 8,
  },
  cartText: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 6,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});


