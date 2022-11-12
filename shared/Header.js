import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 20,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  logo: {
    height: 24,
    width: 24,
    marginHorizontal: 10,
    marginTop: 4,
  },
  headerTitle: {
    flexDirection: 'row',
  },
});
const Header = ({ navigation, title }) => {
  const handlePress = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name='menu'
        size={28}
        style={styles.icon}
        onPress={handlePress}
      />

      <View style={styles.headerTitle}>
        <Image
          style={styles.logo}
          source={require('../assets/heart_logo.png')}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
