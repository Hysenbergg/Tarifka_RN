import React from 'react'
import { FlatList, Text, ActivityIndicator } from 'react-native';
import CategorieCard from '../../components/CategoryCard/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';

const CategoriesPage = ({navigation}) => {
  
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  const renderCategoryCard = ({item}) => <CategorieCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory})
  }

  if(loading){
    return <ActivityIndicator size="large" />
  }

  if(error){return <Text>{error}</Text>}

  return (
    <FlatList data={data.categories} renderItem={renderCategoryCard}/>
  )
}

export default CategoriesPage;