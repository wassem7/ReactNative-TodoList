import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
const Form = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review Body'
              value={props.values.body}
              onChangeText={props.handleChange('body')}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Between 1-5'
              value={props.values.rating}
              onChangeText={props.handleChange('rating')}
              keyboardType='numeric'
            />

            <Button
              title='submit'
              color='maroon'
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
