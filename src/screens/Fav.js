import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import ProductList from '../components/ProductList';
import OtherList from '../components/OtherList';
 import { FavoritesContext } from '../components/context/FavContext';
import data from '../data/kimono.json';


function FavoritesScreen({navigation}) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = data.male.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  const favoriteOthers = data.hairclip.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteOthers.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>您尚未選擇</Text>
      </View>
    );
  }

  return <OtherList list={favoriteOthers} navigation={navigation} /> ;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#E0FDFF"
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
