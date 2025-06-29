// components/Logo.tsx
import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface LogoProps {
  width?: number;
  height?: number;
  source: ImageSourcePropType;
}

export default function Logo({ width = 120, height = 90, source }: LogoProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        source={source}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
