// components/Typography.tsx
import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        styles.base,
        props.style,
      ]}
    />
  );
}

export function Title(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        styles.title,
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Poppins_400Regular',
    color: colors.text,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: colors.primary,
  },
});
