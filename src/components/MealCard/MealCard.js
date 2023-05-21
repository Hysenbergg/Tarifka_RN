import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}}>
          <View
            style={styles.inner_container}>
            <View style={styles.info_container}>
              <Text style={styles.info_text}>{meal.strMeal}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;
