import React from "react";
import { FlatList ,Box, ScrollView,Center} from "native-base";
import Card from "./Card";

const ProductList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Card product={item} navigation={navigation} />;
  return (
    <Box 
    _dark={{ bg: "#828282" }}
    _light={{ bg: "#E0FDFF" }}>
    <FlatList
   
      contentContainerStyle={{flexDirection : "column"}} 
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      numColumns={2}
    />    
    </Box>

  
  );  
}

export default  ProductList;