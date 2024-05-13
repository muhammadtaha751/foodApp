import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MenuCard from '../components/MenuCard/MenuCard';

export default function Home({ navigation }) {

    function handleCard() {
        navigation.navigate('Product')
    }

    return (
        <ScrollView>
            <View >
                <View style={styles.containerTwo}>
                    <Image source={require('../assets/vectorTwo.png')}
                        style={styles.imageOne} />
                    <Text style={styles.text}>
                        Home
                    </Text>
                    <Image source={require('../assets/vectorOne.png')}
                        style={styles.imageTwo} />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Search'
                        placeholderTextColor="#989898"
                    />
                    <Image
                        source={require('../assets/Search.png')}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        Popular item
                    </Text>
                </View>

                <View style={styles.card} >
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}>
                        Special Offers
                    </Text>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>
                        New Arrival Item
                    </Text>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCard}>
                        <MenuCard />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    text: {
        color: 'black',
        marginLeft: 25,
        fontWeight: "500",
        fontSize: 18
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10
    },
    input: {
        padding: 15,
        color: 'black'
    },
    image: {
        marginRight: 10
    },
    card: {
        flex: 1,
        flexDirection: 'row', // Horizontal layout
        justifyContent: 'space-evenly', // Align items with space between
        alignItems: 'center', // Align items in the center vertically
        paddingHorizontal: 20,
    },
    containerTwo: {
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
});