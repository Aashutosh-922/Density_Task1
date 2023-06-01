import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface CoinTableProps {
  coins: Array<{
    symbol: string;
    price: string;
    volume: string;
  }>;
  onCoinPress: (coin: {
    symbol: string;
    price: string;
    volume: string;
  }) => void;
}

const CoinTable: React.FC<CoinTableProps> = ({ coins, onCoinPress }) => {
  const renderItem = ({ item }: { item: { symbol: string; price: string; volume: string } }) => (
    <TouchableOpacity style={styles.row} onPress={() => onCoinPress(item)}>
      <Text style={styles.text}>{item.symbol}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.volume}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Symbol</Text>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>Volume</Text>
      </View>
      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={(item) => item.symbol}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CoinTable;
