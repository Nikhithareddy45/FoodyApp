import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ImageCarousel from '../Components/ScrollBar'; // ✅ Correct Import
import { Colors } from '../../Colors'; 
import CategoryCarousel from '../Components/CategoryCarousel'; 
import SearchCategory from '../Components/SearchCategory'; 
import ProductsCategory from '../Components/ProductsCategory';
import BottomTabBar from '../Components/BottomNavigator';
const Index = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <SearchCategory />
        <ImageCarousel />
        <CategoryCarousel />
        <ProductsCategory />
      </ScrollView>
      <BottomTabBar/>
    </SafeAreaView>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.maincolor,
  },
  scrollContainer: {
    flexGrow: 1,  // Ensures scrolling when content overflows
    paddingBottom: 70, // Prevents content from overlapping BottomTabBar
  },
  container: {
    flex: 1, 
    display:'flex',
    flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.maincolor,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
