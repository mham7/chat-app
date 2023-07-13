import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';

export default function Home() {
  const navigation = useNavigation();

  const handleChatButton = () => {
    navigation.navigate('Chat');
  };

  const handleLogoutButton = () => {
    auth.signOut()
      .then(() => {
        // Handle successful logout, such as navigating to the login screen
      })
      .catch((error) => {
        // Handle error if logout fails
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleChatButton}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
