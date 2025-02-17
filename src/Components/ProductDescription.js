// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
// import { Colors } from '../../Colors'; 
// import { useRoute } from '@react-navigation/native';

// const ProductDescription = () => {
//   const route = useRoute();
//   const { food } = route.params; // Get data from previous screen

//   return (
//     <View style={styles.container}>
//       <Image source={food.image} style={styles.foodImage} />

//       <View style={styles.detailsContainer}>
//         <Text style={styles.foodName}>{food.name}</Text>
//         <Text style={styles.subName}>{food.subname}</Text>

//         {/* Location */}
//         <View style={styles.locationRow}>
//           <FontAwesome5 name="map-marker-alt" size={16} color="red" />
//           <Text style={styles.locationText}>{food.location}</Text>
//         </View>

//         {/* Rating and Price */}
//         <View style={styles.ratingRow}>
//           <View style={styles.ratingView}>
//             <FontAwesome5 name="star" size={16} color="#f4c430" />
//             <Text style={styles.ratingText}>{food.rating}</Text>
//           </View>
//           <Text style={styles.price}>${food.price}</Text>
//         </View>

//         {/* Add to Cart Button */}
//         <TouchableOpacity style={styles.cartButton}>
//           <FontAwesome5 name="shopping-cart" size={18} color="#FFF" />
//           <Text style={styles.cartText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDescription;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.maincolor,
//   },
//   foodImage: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//   },
//   detailsContainer: {
//     padding: 15,
//     backgroundColor: Colors.white,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     marginTop: -20, 
//   },
//   foodName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subName: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#555',
//     marginVertical: 5,
//   },
//   locationRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     justifyContent: 'center',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#888',
//     marginLeft: 5,
//   },
//   ratingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 15,
//     justifyContent: 'space-between',
//   },
//   ratingView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingText: {
//     fontSize: 16,
//     color: '#555',
//     marginLeft: 5,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: Colors.red,
//   },
//   cartButton: {
//     flexDirection: 'row',
//     backgroundColor: Colors.red,
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   cartText: {
//     color: '#FFF',
//     fontSize: 16,
//     marginLeft: 10,
//   },
// });
