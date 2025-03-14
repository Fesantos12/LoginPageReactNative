import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';

import { Link } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../assets/Background.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.headerTextLogin}>Login here</Text>
          <Text style={styles.headerTextWelcome}>
            Welcome back you've been missed!
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} />
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </View>
          <Pressable style={styles.formButton}>
            <Text style={styles.formButtonText}>Sign in</Text>
          </Pressable>
          <Pressable style={styles.createAccoutButton}>
            <Link href={'/Register'} asChild>
              <Text style={styles.createAccoutButtonText}>
                Create new account
              </Text>
            </Link>
          </Pressable>
        </View>

        <View style={styles.mediaContainer}>
          <Text style={styles.mediaContainerText}>Or continue with</Text>
          <View style={styles.iconsContainer}>
            <Pressable style={styles.iconsContainerButton}>
              <Ionicons name="logo-google" size={18} color="black" />
            </Pressable>
            <Pressable style={styles.iconsContainerButton}>
              <Ionicons name="logo-facebook" size={18} color="black" />
            </Pressable>
            <Pressable style={styles.iconsContainerButton}>
              <Ionicons name="logo-apple" size={18} color="black" />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    gap: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 26,
  },
  headerTextLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  headerTextWelcome: {
    width: 200,
    lineHeight: 30,
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'black',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  input: {
    width: '100%',
    height: 60,
    paddingLeft: 20,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    fontSize: 16,
    color: '#626262',
    fontWeight: 'medium',
  },
  forgotContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F41BB',
  },
  formButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#1F41BB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '0px 10px 20px 0px rgba(203,214,255,1)',
  },
  formButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  createAccoutButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  createAccoutButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#494949',
  },
  mediaContainerText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F41BB',
  },
  iconsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  iconsContainerButton: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
