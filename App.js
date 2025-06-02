import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Tareas from './screens/Tareas';
import Subtareas from './screens/Subtareas';

export default function App() {

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={screenOptions("LOGIN")}/> 
      <Stack.Screen name="Home" component={Home} options={screenOptions("HOME")}/>
      <Stack.Screen name="Tareas" component={Tareas} options={screenOptions("TAREAS")}/>
      <Stack.Screen name="Subtareas" component={Subtareas} options={screenOptions("SUBTAREAS")}/>
    </Stack.Navigator>
  );
}

const screenOptions = (title) =>({
  title,
  headerTintColor: "white",
  headerTitleAlign: "center",
  headerStyle: { backgroundColor: "#525FE1" },
})


  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
