// screens/Subtareas.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Subtareas({ route }) {
  const { tareaId } = route.params;

  const subtareas = [
    { id: '1', titulo: `Subtarea A de Tarea ${tareaId}` },
    { id: '2', titulo: `Subtarea B de Tarea ${tareaId}` },
    { id: '3', titulo: `Subtarea C de Tarea ${tareaId}` },
    { id: '4', titulo: `Subtarea D de Tarea ${tareaId}` },
    { id: '5', titulo: `Subtarea E de Tarea ${tareaId}` },
    { id: '6', titulo: `Subtarea F de Tarea ${tareaId}` },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={subtareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: '#EEE',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
});
