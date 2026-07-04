import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
const LoginScreen = ({ route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = route.params;
  const handleLogin = () => {
    if (!email || !password) { Alert.alert('Error', 'Please fill all fields'); return; }
    setIsLoggedIn(true);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>⚔️ FIGHT IN THE NIGHT</Text>
          <Text style={styles.subtitle}>PvP Fighting Game</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  content: { padding: 20, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FF6B00', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#888' },
  formContainer: { marginBottom: 30 },
  input: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 15, marginBottom: 15, color: '#FFF', fontSize: 16 },
  loginButton: { backgroundColor: '#FF6B00', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});
export default LoginScreen;