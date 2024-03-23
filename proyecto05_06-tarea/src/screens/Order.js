import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Order({ route }) {
  const { selectedProducts } = route.params || [];
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DrinkMenu', { selectedProducts })}
          style={{ marginLeft: 15 }}
        >
          <Ionicons name="arrow-back" size={24} color="#00704A" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DrinkMenu', { selectedProducts })}
          style={{ marginRight: 15 }}
        >
          <Ionicons
            name="cart"
            size={24}
            color="#00704A"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedProducts]);

  const getTotalPrice = () => {
    if (!Array.isArray(selectedProducts)) {
      return 0;
    }
  
    return selectedProducts.reduce((total, product) => {
      return total + parseFloat(product.price.replace('S/', '').trim());
    }, 0).toFixed(2);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Realizar Pedido</Text>
      </View>
      <Text style={styles.description}>Selecciona tus productos y procede al pago.</Text>
      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>S/ {getTotalPrice()}</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: '#C4251A',
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
