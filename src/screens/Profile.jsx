import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile() {
    return (
        <ScrollView>
        <View>
            <View style={styles.container}>
                <Image source={require('../assets/vectorTwo.png')}
                    style={styles.imageOne} />
                <Text style={styles.text}>
                    Profile
                </Text>
                <Image source={require('../assets/vectorOne.png')}
                    style={styles.imageTwo} />
            </View>
            <View>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Muhammad Taha
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Orders
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Favourites
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Offers
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Rewards
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24, }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Vouchers
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Help center
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Settings
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Terms & Conditions
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerTwo}>
                <Image
                    source={require('../assets/person-outline.png')}
                    style={{ width: 24, height: 24 }}
                />
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Log out
                    </Text>
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
        backgroundColor: "#FED718",
        height: 50
    },
    imageOne: {
        marginLeft: 20
    },
    imageTwo: {
        marginRight: 20
    },
    containerTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 15
    }
});