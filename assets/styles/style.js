import { StyleSheet } from 'react-native';
import { Colors } from '../../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.maincolor,
    padding: 20,
  },
  mainText:{
    fontSize:38,
    fontWeight:'bold',
  }
});

export default styles;
