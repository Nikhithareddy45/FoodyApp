import React from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Colors'; 

const images = [
  require('../../assets/images/image1.png'),
  require('../../assets/images/image2.png'),
  require('../../assets/images/image3.png'),
  require('../../assets/images/image2.png'),
  require('../../assets/images/image1.png'),
];

const { width } = Dimensions.get('window'); 

const ImageCarousel = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollView}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  scrollContainer: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.maincolor,
  },
  scrollView: {
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 180, 
    resizeMode: 'cover',
  },
});
