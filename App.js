import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
//import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/listItem';
import AddItem from './components/addItem';



export default function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const [shopItems, setShopItems] = useState([
    { id: Math.random().toFixed(5), text: 'Milk' },
    { id: Math.random().toFixed(5), text: 'Eggs' },
    { id: Math.random().toFixed(5), text: 'Bread' },
    { id: Math.random().toFixed(5), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setShopItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    })
  }

  const addItem = (text) => {
    setShopItems(prevItems => {
      return[{id: Math.random().toFixed(5), text }, ...prevItems]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={ addItem }/>
      <FlatList data ={shopItems} renderItem={({item}) => <ListItem 
                                                              item={item}
                                                              deleteItem={deleteItem}/>}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  }
});
