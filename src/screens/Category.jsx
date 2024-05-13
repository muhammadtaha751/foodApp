import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MenuCard from '../components/MenuCard/MenuCard';

export default function Category({ navigation }) {

  const [selectedItem, setSelectedItem] = useState(null);

  const items = ['Burger', 'Pizza', 'Biryani', 'Salad', 'Raita'];

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  function handleCard() {
    navigation.navigate('Product')
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Image source={require('../assets/vectorTwo.png')}
            style={styles.imageOne} />
          <Text style={styles.text}>
            Category
          </Text>
          <Image source={require('../assets/vectorOne.png')}
            style={styles.imageTwo} />
        </View>
        <View style={styles.containerTwo}>
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
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                selectedItem === item ? styles.selectedItem : null,
              ]}
              onPress={() => handleItemPress(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.card}>
          <TouchableOpacity onPress={handleCard}>
            <MenuCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCard}>
            <MenuCard />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={handleCard}>
            <MenuCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCard}>
            <MenuCard />
          </TouchableOpacity>
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
  scrollContainer: {
    paddingVertical: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  selectedItem: {
    backgroundColor: '#FED718',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  }
});