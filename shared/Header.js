import { View, Text, StyleSheet } from 'react-native';
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
});
const Header = ({ navigation, title }) => {
  const handlePress = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name='menu'
        size={28}
        style={styles.icon}
        onPress={handlePress}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
