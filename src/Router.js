import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import MealsPage from './pages/MealsPage/MealsPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#eceff1',
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="CategoriesPage"
          component={CategoriesPage}
        />
        <Stack.Screen
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#eceff1',
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="MealsPage"
          component={MealsPage}
        />
        <Stack.Screen
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#eceff1',
            },
            headerTintColor: '#ffa500',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="DetailsPage"
          component={DetailsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
