import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
const ShopScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('characters');
  const items = {
    characters: [
      { id: 1, name: 'Ninja', price: 500, owned: true },
      { id: 2, name: 'Samurai', price: 1000, owned: false },
      { id: 3, name: 'Knight', price: 1500, owned: false },
      { id: 4, name: 'Dragon', price: 2000, owned: false }
    ],
    xp: [
      { id: 1, xp: 1000, price: '₹100' },
      { id: 2, xp: 5000, price: '₹450' },
      { id: 3, xp: 10000, price: '₹850' },
      { id: 4, xp: 50000, price: '₹4000' }
    ]
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemBox}>
      <Text style={styles.itemEmoji}>{selectedCategory === 'characters' ? '👤' : '⚡'}</Text>
      <Text style={styles.itemName}>{item.name || `${item.xp} XP`}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>{item.owned ? 'Owned' : 'Buy'}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={[styles.categoryButton, selectedCategory === 'characters' && styles.activeCategory]} onPress={() => setSelectedCategory('characters')}>
          <Text style={styles.categoryText}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryButton, selectedCategory === 'xp' && styles.activeCategory]} onPress={() => setSelectedCategory('xp')}>
          <Text style={styles.categoryText}>Buy XP</Text>
        </TouchableOpacity>
      </View>
      <FlatList scrollEnabled={false} data={items[selectedCategory]} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} numColumns={2} columnWrapperStyle={styles.row} />
      <View style={styles.discountInfoBox}>
        <Text style={styles.discountInfoTitle}>🎬 YouTube Discount</Text>
        <Text style={styles.discountInfoText}>Subscribe for 10% discount on all purchases!</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  categoriesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  categoryButton: { flex: 1, backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 12, alignItems: 'center', marginHorizontal: 5 },
  activeCategory: { borderColor: '#FF6B00', backgroundColor: '#2a1a0a' },
  categoryText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  itemBox: { width: '48%', backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 12, alignItems: 'center' },
  itemEmoji: { fontSize: 32, marginBottom: 8 },
  itemName: { color: '#FFF', fontSize: 14, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  itemPrice: { color: '#FF6B00', fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  buyButton: { backgroundColor: '#FF6B00', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6, width: '100%', alignItems: 'center' },
  buyButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  discountInfoBox: { backgroundColor: '#2a1a0a', borderColor: '#FF6B00', borderWidth: 2, borderRadius: 8, padding: 15, marginVertical: 20, alignItems: 'center' },
  discountInfoTitle: { color: '#FF6B00', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  discountInfoText: { color: '#888', fontSize: 12, textAlign: 'center' }
});
export default ShopScreen;