import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            backgroundColor: 'white',
            padding: 5,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Image
            style={{height: 75, width: 75, resizeMode: 'contain'}}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>
            {category.strCategory}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
