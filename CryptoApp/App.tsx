/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CoinTable from './CoinTable';
import CoinChart from './CoinChart';
import Splash from './Splash';

const API_URL = 'https://api.binance.com/api/v3/ticker/24hr';

interface HomeScreenProps {
  navigation: any; // Update the type according to your navigation library
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoinData();
  }, []);

  const fetchCoinData = async () => {
    try {
      const response = await axios.get(API_URL);
      setCoins(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCoinPress = (coin: any) => {
    navigation.navigate('Chart', { coin });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#61dafb" />
      ) : (
        <CoinTable coins={coins} onCoinPress={handleCoinPress} />
      )}
    </View>
  );
};

interface ChartScreenProps {
  navigation: any; // Update the type according to your navigation library
}

const ChartScreen: React.FC<ChartScreenProps> = ({ navigation }) => {
  const coin = navigation.getParam('coin');

  return (
    <View style={styles.container}>
      <CoinChart coin={coin} />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Splash: Splash,
    Home: HomeScreen,
    Chart: ChartScreen,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});




// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import CoinTable from './CoinTable';
// import CoinChart from './CoinChart';
// import Splash from './Splash';

// const API_URL = 'https://api.binance.com/api/v3/ticker/24hr';

// const HomeScreen = ({ navigation }) => {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     fetchCoinData();
//   }, []);

//   const fetchCoinData = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setCoins(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCoinPress = (coin) => {
//     navigation.navigate('Chart', { coin });
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#61dafb" />
//       ) : (
//         <CoinTable coins={coins} onCoinPress={handleCoinPress} />
//       )}
//     </View>
//   );
// };

// const ChartScreen = ({ navigation }) => {
//   const coin = navigation.getParam('coin');

//   return (
//     <View style={styles.container}>
//       <CoinChart coin={coin} />
//     </View>
//   );
// };

// const AppNavigator = createStackNavigator(
//   {
//     Splash: Splash,
//     Home: HomeScreen,
//     Chart: ChartScreen,
//   },
//   {
//     initialRouteName: 'Splash',
//     headerMode: 'none',
//   }
// );

// export default createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });





// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
