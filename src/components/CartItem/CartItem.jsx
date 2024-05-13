import { Text, View, ScrollView, TextInput, Image,Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartItem(){
    return(
        <View  style={styles.container}>
       <Image source={require('../../assets/Burger.png')}
       style={styles.image}/>
       <View>
       <Text style={styles.text}>
         Cheese Burger
        </Text>
        <Text style={styles.text}>
          Rs.389.00
        </Text>
       </View>
      <View style={styles.containerTwo}>
        <TouchableOpacity>
      <Image source={require('../../assets/plus.png')}
      />
      </TouchableOpacity>
 <Text style={styles.text}>
         1
        </Text>
        <TouchableOpacity>
<Image source={require('../../assets/minus.png')}
      />
      </TouchableOpacity>
      </View>
       </View>
    )
}



const styles = StyleSheet.create({
text:{
    color:'black'
},
container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderWidth:1,
    margin:20,
    alignItems:'center',
    backgroundColor:'#FED718',
    borderColor:'transparent',
    padding:10,
    borderRadius:15
},
image:{
    width:90,
    height:60
},
containerTwo:{
    flexDirection:'row',
    alignItems:"center",
    backgroundColor:'white',
    justifyContent:'space-evenly',
    width:80
}
});