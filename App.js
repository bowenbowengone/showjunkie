import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {artist: 'buy coffee', venue: 'spinning jenny', city: 'Greer', state: 'SC', key: '0'},
    {artist: 'bela fleck', venue: 'red rocks', city: 'Morrison', state: 'CO', key: '1'},
    {artist: 'tedeschi trucks band', venue: 'fox theater', city: 'Atlanta', state: 'GA', key: '2'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (artist, venue) => {
    // if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { artist: artist, venue: venue, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    // } else {
    //   Alert.alert('OOPS!', 'Todos must be over 3 chars long.', [
    //     {text: 'Understood', onPress: () => console.log('alert closed')}
    //   ]);
    // }
  }
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* enter search component */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          
          />
        </View>
      </View>  
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
