import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MenuCard() {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/restaurant.png')}
                    style={styles.image}
                />

                <Text style={styles.text}>
                  Arabian Fast Food
                </Text>
        
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.textTwo}>
                       Map
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 180,
        margin: 25,
        padding: 15,
        borderColor: '#FED718',
        alignItems: 'center'
    },
    touch: {
        backgroundColor: "#FED718",
        width: 110,
        height: 35,
        borderRadius: 10
    },
    text: {
        color: 'black',
        marginBottom: 5,
    },
    textTwo: {
        color: 'black',
        paddingLeft: 15,
        paddingTop: 5
    }

});