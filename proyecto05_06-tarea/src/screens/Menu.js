import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Order from './Order';

const beverages = [
  {
    name: 'Café Latte',
    category: 'Cafés',
    description: 'Espresso con leche vaporizada y una pequeña cantidad de espuma de leche.',
    price: 'S/ 18.90',
    image: require('../images/latte.jpg')
  },
  {
    name: 'Cappuccino',
    category: 'Cafés',
    description: 'Espresso mezclado con leche vaporizada y coronado con espuma de leche.',
    price: 'S/ 20.80',
    image: require('../images/cappuccino.jpg')
  },
  {
    name: 'Mocha',
    category: 'Cafés',
    description: 'Espresso mezclado con chocolate caliente y leche vaporizada, cubierto con crema batida.',
    price: 'S/ 22.70',
    image: require('../images/mocha.jpg')
  },
  {
    name: 'Té Verde Matcha Latte',
    category: 'Tés',
    description: 'Polvo de té verde Matcha mezclado con leche vaporizada y endulzado al gusto.',
    price: 'S/ 18.90',
    image: require('../images/matcha-latte.jpg')
  },
  {
    name: 'Café Americano',
    category: 'Cafés',
    description: 'Una o dos shots de espresso agregados a agua caliente.',
    price: 'S/ 15.90',
    image: require('../images/americano.jpg')
  },  
];

export default function Menu() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
          <Ionicons name="arrow-back" size={24} color="#00704A" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Pedido', { selectedProducts })}
          style={{ marginRight: 15 }}
        >
          <Ionicons
            name="cart"
            size={24}
            color="#00704A"
          />
          {selectedProducts.length > 0 && (
            <View style={styles.cartCountContainer}>
              <Text style={styles.cartCount}>{selectedProducts.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedProducts]);

  const handleToggleProduct = (product) => {
    const updatedProducts = selectedProducts.includes(product)
      ? selectedProducts.filter(item => item !== product)
      : [...selectedProducts, product];
    setSelectedProducts(updatedProducts);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      {beverages.map((drink, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.container}>
            <Image source={drink.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{drink.name}</Text>
              <Text style={styles.category}>{drink.category}</Text>
              <Text style={styles.description}>{drink.description}</Text>
              <Text style={styles.price}>{drink.price}</Text>
              <TouchableOpacity
                onPress={() => handleToggleProduct(drink)}
                style={[styles.addToCartButton, selectedProducts.includes(drink) && styles.selectedProduct]}
              >
                <Text style={styles.addToCartText}>Añadir al carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    color: '#555',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
    color: '#666',
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cartCountContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF6F61',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cartCount: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#00704A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedProduct: {
    backgroundColor: '#a8b7ba',
  },
});
