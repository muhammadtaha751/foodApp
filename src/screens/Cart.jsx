import { Text, View, ScrollView, TextInput, Image,Button, StyleSheet, TouchableOpacity } from 'react-native';
import CartItem from '../components/CartItem/CartItem';

export default function Cart(){
    return(
        <View>
         <View style={styles.container}> 
        <Image source={require('../assets/vectorTwo.png')}
        style={styles.imageOne}/>
        <Text style={styles.text}>
           Cart
        </Text>
        <Image source={require('../assets/vectorOne.png')}
        style={styles.imageTwo}/>
      </View>
      <View>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </View>
      <View style={styles.containerThree}>

      
      <View style={styles.containerTwo}>
      <Text style={styles.text}>
           Subtotal
        </Text>
        <Text style={styles.text}>
           Rs1556.00
        </Text>
      </View>
      <View style={styles.containerTwo}>
      <Text style={styles.text}>
           Discount
        </Text>
        <Text style={styles.text}>
           Rs56.00
        </Text>
      </View>
      <View style={styles.containerTwo}>
      <Text style={styles.textYellow}>
           Total
        </Text>
        <Text style={styles.textYellow}>
           Rs1500.00
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touch}>
        <Text style={styles.textBuy}>
          Buy Now
        </Text>
        </TouchableOpacity>
      </View>
      </View>
       </View>
    )
}



const styles = StyleSheet.create({
    text: {
        color: 'black',
        marginLeft:25,
        fontWeight:"500",
        fontSize:18
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:"#FED718",
        height:50
    },
    imageOne:{
        marginLeft:20
    },
    imageTwo:{
        marginRight:20
    },
    containerTwo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        height:30,
        marginTop:10
    },
    textYellow:{
        color:'#FED718',
        marginLeft:25,
        fontWeight:"500",
        fontSize:18
    },
    touch:{
        backgroundColor:'#FED718',
        margin:20,
        height:40,
        borderRadius:15,
        marginTop:50
    },
    textBuy:{
        textAlign:'center',
        color:'black',
        fontSize:17,
        fontWeight:'600',
        paddingTop:10
    },
    containerThree:{
        marginTop:30
    }
});