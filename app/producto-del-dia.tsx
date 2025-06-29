import React from 'react';
import { StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Title, Text } from '../components/Typography';

export default function ProductoDelDiaScreen() {
  return (
    <Layout>
      <Header title="🌟 Producto del día" />
      <Title style={styles.title}>El Atún Rojo</Title>
      <Text style={styles.description}>
        Hoy destacamos el atún rojo capturado esta mañana. Exquisito para tataki y sashimi.
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});