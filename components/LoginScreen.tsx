import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.100.46/login.php', {
        username,
        email,
        password
      });
      
      console.log('Respuesta del servidor:', response.data);
      
      if (response.data.success) {
        setWelcomeMessage(`Bienvenido/a, ${username}!`);
        Alert.alert('Éxito', `Bienvenido/a, ${username}!`);
        // Limpiar los campos después de un registro exitoso
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Error', response.data.message || 'Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
      Alert.alert('Error', 'Error en la conexión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      {welcomeMessage ? (
        <Text style={styles.welcomeMessage}>{welcomeMessage}</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#0404e2',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeMessage: {
    fontSize: 20,
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 20,
  },
});