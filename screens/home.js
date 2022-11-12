import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Train an AI model today',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Create an API for the web app',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Set up mongodb for the backend ',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
