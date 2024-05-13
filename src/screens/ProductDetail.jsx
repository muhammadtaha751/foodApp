import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MenuCard from '../components/MenuCard/MenuCard';

export default function ProductDetail() {
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Image source={require('../assets/vectorTwo.png')}
                        style={styles.imageOne} />
                    <Text style={styles.text}>
                        Product Details
                    </Text>
                    <Image source={require('../assets/vectorOne.png')}
                        style={styles.imageTwo} />
                </View>
                <View style={styles.containerTwo}>
                    <Image source={require('../assets/cheeseburger.png')}
                        style={styles.burgerImage} />
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.text}>
                        Cheese Burger
                    </Text>
                    <Text style={styles.text}>
                        Rs389.00
                    </Text>
                </View>
                <View>
                    <Text style={styles.textGreen}>
                        In Stock
                    </Text>
                </View>
                <View style={styles.containerFour}>
                    <Text style={styles.text}>
                        Product Quantity
                    </Text>
                    <View style={styles.containerSeven}>
                        <TouchableOpacity>
                            <Image source={require('../assets/plus.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            1
                        </Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/minus.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerFive}>
                    <Text style={styles.text}>
                        Product Details
                    </Text>
                    <Text style={styles.textLight}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id es officia deserunt mollit anim id es officia deserunt mollit anim id es officia deserunt mollit anim id es officia deserunt mollit anim id es officia deserunt mollit  id es officia deserunt mollit anim id es officia deserunt mollit anim id es es officia deseruntes officia deserunt....Read More
                    </Text>
                </View>
                <View style={styles.containerSix}>
                    <Text style={styles.text}>
                        Related Product
                    </Text>
                    <View style={styles.card}>
                        <TouchableOpacity>
                        <MenuCard />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <MenuCard />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FED718",
        height: 50
    },
    imageOne: {
        marginLeft: 20
    },
    imageTwo: {
        marginRight: 20
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'
    },
    containerTwo: {
        alignItems: 'center',
        borderWidth: 1,
        margin: 20,
        height: 200,
        borderColor: "#FED718"
    },
    burgerImage: {
        marginTop: 20
    },
    containerThree: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20
    },
    textGreen: {
        color: '#13B419',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 30
    },
    containerFour: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30
    },
    containerFive: {
        marginLeft: 20
    },
    textLight: {
        color: '#989898',
        marginTop: 15,
        marginBottom: 30
    },
    containerSix: {
        marginLeft: 20
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    containerSeven:{
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:'white',
        justifyContent:'space-evenly',
        width:80,
        backgroundColor:'#FED718'
    }
});