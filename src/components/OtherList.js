import React from "react";
import { FlatList ,Box, ScrollView,Center} from "native-base";
import Other from "./Other";


const OtherList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Other product={item} navigation={navigation} />;
  return (
    <Box 
    _dark={{ bg: "#828282" }}
    _light={{ bg: "#E0FDFF" }}
    height={500}>
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

export default  OtherList;