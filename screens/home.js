import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import Form from './Form';
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

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    setOpenModal(false);
  };
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType='slide'>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setOpenModal(false)}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalButton, ...styles.modalButtonClose }}
            />
          </TouchableOpacity>

          <Form addReview={addReview} />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <MaterialIcons style={styles.modalButton} name='add' size={24} />
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  modalButton: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginBottom: 10,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  modalButtonClose: {
    marginTop: 10,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
