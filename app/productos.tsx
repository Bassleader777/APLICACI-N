import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Text } from '../components/Typography';

const mockData = [
  { id: '1', name: 'Lubina Fresca', price: '€12.50/kg', imageUri: 'https://via.placeholder.com/300' },
  { id: '2', name: 'Gambas Rojas',  price: '€18.00/kg', imageUri: 'https://via.placeholder.com/300' },
];

export default function ProductosScreen() {
  return (
    <Layout>
      <Header title="🐟 Productos" />
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            imageUri={item.imageUri}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>No hay productos disponibles.</Text>}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    marginTop: 32,
  },
});