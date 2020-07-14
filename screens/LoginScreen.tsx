import React, { FC } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

const LoginScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/background.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </View>
        <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
          <Text style={{ ...styles.buttonText, color: '#fff' }}>
            SIGN IN WITH FACEBOOK
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    ...StyleSheet.absoluteFill as {},
  },
  image: {
    flex: 1,
    height: 'auto',
    width: 'auto',
  },
  buttonContainer: {
    height: Dimensions.get('window').height / 3,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
