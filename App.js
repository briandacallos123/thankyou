import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


// components
import Home from './screens/Home'
import Login from './screens/Login'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <View style={styles.container}>
        {isLoggedIn? <Home/>:<Login/>}
    </View>
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
