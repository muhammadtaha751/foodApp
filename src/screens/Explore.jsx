import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard'
import MenuCard from '../components/MenuCard/MenuCard';
export default function Explore({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Nearby Restaurant');

  function handleCard() {
    navigation.navigate('Product')
  }

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Nearby Restaurant':
        return <View>
          <View style={styles.card}>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
            <TouchableOpacity>
              <RestaurantCard />
            </TouchableOpacity>
          </View>
        </View>
          ;
      case 'Food Menu':
        return <View>
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
          <View style={styles.card}>
            <TouchableOpacity onPress={handleCard}>
              <MenuCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCard}>
              <MenuCard />
            </TouchableOpacity>
          </View>
        </View>;
      default:
        return null;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/vectorTwo.png')}
          style={styles.imageOne} />
        <Text style={styles.text}>
          Explore
        </Text>
        <Image source={require('../assets/vectorOne.png')}
          style={styles.imageTwo} />
      </View>

      {/* Category Selector */}
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {['Nearby Restaurant', 'Food Menu'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              selectedCategory === item ? styles.selectedItem : null,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Render Content */}
      {renderContent()}
    </ScrollView>
  );
};




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
  scrollContainer: {
    paddingVertical: 10,
  },
  item: {
    paddingHorizontal: 40,
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
    justifyContent: "space-evenly"
  }
});