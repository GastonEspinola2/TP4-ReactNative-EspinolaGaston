import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const tareas = [
  { id: '1', titulo: 'Tarea 1' },
  { id: '2', titulo: 'Tarea 2' },
  { id: '3', titulo: 'Tarea 3' },
  { id: '4', titulo: 'Tarea 4' },
  { id: '5', titulo: 'Tarea 5' },
  { id: '6', titulo: 'Tarea 6' },
  { id: '7', titulo: 'Tarea 7' },
  { id: '8', titulo: 'Tarea 8' },
  { id: '9', titulo: 'Tarea 9' },
  { id: '10', titulo: 'Tarea 10' },
  { id: '11', titulo: 'Tarea 11' },
  { id: '12', titulo: 'Tarea 12' },
  { id: '13', titulo: 'Tarea 13' },
];

export default function Tareas({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Subtareas', { tareaId: item.id })}
    >
      <Text style={styles.text}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: '#DDD',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});
