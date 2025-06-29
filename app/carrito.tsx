import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Title, Text } from '../components/Typography';

const cartItems: ArrayLike<any> | null | undefined = [];

export default function CarritoScreen() {
  return (
    <Layout>
      <Header title="🛒 Carrito" />
      <Title style={styles.title}>Tu carrito</Title>
      <FlatList
        data={cartItems}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => <Text>- {item.name}</Text>}
        ListEmptyComponent={<Text style={styles.empty}>Tu carrito está vacío.</Text>}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
  },
});