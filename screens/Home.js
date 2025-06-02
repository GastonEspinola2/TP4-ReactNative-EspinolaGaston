import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const mercs = [
  { name: 'Scout',desc:'Rápido y ágil, experto en combate cercano y captura de objetivos.' ,image: require('../assets/Scout.jpg') },
  { name: 'Soldier',desc:'Versátil y resistente, usa cohetes para atacar y moverse con fuerza bruta.' ,image: require('../assets/Soldier.jpg') },
  { name: 'Pyro',desc:'Despiadado incendiario que domina el fuego y el caos de corto alcance.' ,image: require('../assets/Pyro.jpg') },
  { name: 'Demoman',desc:'Especialista en explosivos, ideal para trampas y control de zonas.' , image: require('../assets/Demoman.jpg') },
  { name: 'Heavy',desc:'Tanque del equipo, lento pero devastador con su ametralladora.' , image: require('../assets/Heavy.jpg') },
  { name: 'Engineer',desc:'Constructor estratégico que apoya con torretas, curas y teletransportes.' , image: require('../assets/Engineer.jpg') },
  { name: 'Medic',desc:'Sanador esencial que mantiene al equipo con vida y puede desatar Übercharges.' , image: require('../assets/Medic.jpg') },
  { name: 'Sniper',desc:'Preciso y letal desde lejos, elimina objetivos clave con un solo disparo.' , image: require('../assets/Sniper.jpg') },
  { name: 'Spy',desc:'Maestro del sigilo y el engaño, elimina enemigos desde las sombras.' , image: require('../assets/Spy.png') },
];

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mercenarios de TF2</Text>

      <View style={styles.grid}>
        {mercs.map((merc, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => alert(`${merc.desc}`)}>
            <Image source={merc.image} style={styles.image} />
            <Text style={styles.name}>{merc.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('Tareas')}>
        <Text style={styles.buttonText}>Ir a tareas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 8,
    padding: 12,
    borderRadius: 12,
    width: 110,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#525FE1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
