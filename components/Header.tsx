import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import { Title } from './Typography';
import colors from '../constants/colors';

interface Props {
  title: string;
  showLogo?: boolean;
  logoSource?: any;
  logoWidth?: number;
  logoHeight?: number;
}

export default function Header({
  title,
  showLogo = false,
  logoSource,
  logoWidth = 28,
  logoHeight = 28,
}: Props) {
  return (
    <View style={styles.header}>
      {showLogo && logoSource && (
        <Logo
          width={logoWidth}
          height={logoHeight}
          source={logoSource}
        />
      )}
      <Title style={showLogo ? styles.titleWithLogo : styles.title}>
        {title}
      </Title>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    color: colors.primary,
  },
  titleWithLogo: {
    fontSize: 28,
    color: colors.primary,
    marginLeft: 8,
  },
});
