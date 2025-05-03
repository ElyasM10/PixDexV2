import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pantallas/Principal/Home';
import Detalle from '../pantallas/Principal/Detalle';

//Aca se definen los parametros que reciben las pantallas
export type RootStackParamList = {
  Home: undefined;
  Detalle:{
    titulo: string;
    generos: string[];
    descripcion: string;
    tipo: string;
  }
};

// Crea una instancia(como una lista) del stack navigator con el tipo RootStackParamList(rutas a navegar)
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {


  return (
    <NavigationContainer>

      <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        cardStyle: { flex: 1 }, // Para que el scroll funcione en web
      }}
      >    
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}  
            />
      <Stack.Screen 
        name="Detalle" 
        component={Detalle} 
        options={{ headerShown: false }}  
            />
      </Stack.Navigator>
    </NavigationContainer>

  );
};