import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notes screen</Text>
      <Link href="/notes/home/" style={styles.button}>
        Go to Home Screen
      </Link>
      <Link href="/notes/details/" style={styles.button}>
        Go to Details Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

