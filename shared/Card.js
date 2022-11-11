import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    backgroundColor: '#fff',
    shadowRadius: 3,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  cardcontent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardcontent}>{props.children}</View>
    </View>
  );
};

export default Card;
