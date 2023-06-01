import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Splash: React.FC = () => {
  const scaleValue = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logo, { transform: [{ scale: scaleValue }] }]}>Crypto App</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#61dafb',
  },
});

export default Splash;
