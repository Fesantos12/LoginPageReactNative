import { StatusBar } from 'expo-status-bar';

import { Link } from 'expo-router';

import {
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default function Home() {
  function handleLoginPage() {}

  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../assets/Background.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <Image source={require('../assets/Workfromhome.png')} />
        <View style={styles.textsContainer}>
          <Text style={styles.textsContainer1}>
            Discover Your Dream Job here
          </Text>
          <Text style={styles.textsContainer2}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Link href={'/Login'} asChild>
            <Pressable style={styles.button1} onPress={handleLoginPage}>
              <Text style={styles.button1Text}>Login</Text>
            </Pressable>
          </Link>
          <Link href={'/Register'} asChild>
            <Pressable style={styles.button2}>
              <Text style={styles.button2Text}>Register</Text>
            </Pressable>
          </Link>
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
    justifyContent: 'space-around',
    fontFamily: 'Poppins',
    // gap: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 23,
  },
  textsContainer1: {
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 50,
    letterSpacing: 4,
    textAlign: 'center',
    color: '#1F41BB',
  },
  textsContainer2: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  button1: {
    width: 160,
    height: 60,
    backgroundColor: '#1F41BB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 10px 20px 0px rgba(203,214,255,1)',
  },
  button1Text: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFF',
  },
  button2: {
    width: 160,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2Text: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
  },
});
