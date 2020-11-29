import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import AddShowForm from './components/AddShowForm';
import ShowCatalogue from './components/ShowCatalogue';

export default function App() {  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* enter search component */}
        <AddShowForm />
        <View style={styles.list}>
          <ShowCatalogue />
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
    marginTop: 20,
    borderRadius: 1,
    borderColor: 'black'
  }
});