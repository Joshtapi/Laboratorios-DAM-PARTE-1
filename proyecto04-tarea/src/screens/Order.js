import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Café Latte',
    price: 18.90
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 21.00
  },
  // Agrega más productos según sea necesario
];

export default function Order() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const handleToggleProduct = (product) => {
    const updatedProducts = selectedProducts.includes(product)
      ? selectedProducts.filter(item => item !== product)
      : [...selectedProducts, product];
    setSelectedProducts(updatedProducts);
  }

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realizar Pedido</Text>
      <Text style={styles.description}>Selecciona tus productos y procede al pago.</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.productItem, selectedProducts.includes(item) && styles.selectedProduct]}
            onPress={() => handleToggleProduct(item)}
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>S/{item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>S/{getTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Hacer Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  selectedProduct: {
    backgroundColor: '#a8b7ba',
  },
  productName: {
    fontSize: 16,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
