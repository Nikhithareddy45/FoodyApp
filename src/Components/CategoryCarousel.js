import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'All', image: require('../../assets/images/all.png') },
  { id: '2', name: 'Pizza', image: require('../../assets/images/pizza.png') },
  { id: '3', name: 'Nuggets', image: require('../../assets/images/nuggets.png') },
  { id: '4', name: 'Burger', image: require('../../assets/images/burger.png') },
  { id: '5', name: 'Noodles', image: require('../../assets/images/noodles.png') },
  { id: '6', name: 'Sandwich', image: require('../../assets/images/sandwich.png') },
  // { id: '7', name: 'Fries', image: require('../../assets/images/fries.png') },
];

const CategoryCarousel = ({ onSelectCategory = () => {} }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => onSelectCategory(item.name)}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    marginTop: 5,
    color: '#FFF',
    fontSize: 14,
  },
});
