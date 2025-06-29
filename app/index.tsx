import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title, Text } from "../components/Typography";
import colors from "../constants/colors";

export default function HomeScreen() {
  const router = useRouter();
  const actions = [
    { label: "Productos", icon: "fish", route: "/productos" },
    { label: "Producto del día", icon: "star", route: "/producto-del-dia" },
    { label: "Carrito", icon: "cart", route: "/carrito" },
  ] as const;

  return (
    <Layout>
      <Header
        title="Inicio"
        showLogo
        logoSource={require("../assets/images/logo_pescaderia_sin_texto.png")}
        logoWidth={60}
        logoHeight={60}
      />

      <ImageBackground
        source={require("../assets/images/banner.jpg")}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <Title style={styles.heroTitle}>¡Bienvenido a El Puerto!</Title>
        <Text style={styles.heroSubtitle}>
          Pescados frescos directo del mar a tu mesa
        </Text>
      </ImageBackground>

      <View style={styles.actionsContainer}>
        {actions.map((act) => (
          <Pressable
            key={act.route}
            style={({ pressed }) => [
              styles.actionCard,
              pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
            ]}
            onPress={() => router.push(act.route)}
          >
            <Ionicons
              name={act.icon}
              size={24}
              color={colors.primary}
              style={{ marginBottom: 6 }}
            />
            <Text style={styles.actionText}>{act.label}</Text>
          </Pressable>
        ))}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 180,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  heroImage: {
    borderRadius: 16,
  },
  heroTitle: {
    fontSize: 28,
    marginBottom: 8,
    textAlign: "center",
    color: colors.surface,
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.surface,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface,
    marginHorizontal: 4,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    color: colors.primary,
  },
});
