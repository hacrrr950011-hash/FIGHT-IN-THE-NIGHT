import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';

const AntiquesScreen = () => {
  const [antiques, setAntiques] = useState([
    { id: 1, name: 'Ancient Sword', emoji: '⚔️', rarity: 'Legendary', power: 50, owned: true, description: 'A sword from ancient times' },
    { id: 2, name: 'Golden Shield', emoji: '🛡️', rarity: 'Epic', power: 40, owned: true, description: 'Protective shield made of gold' },
    { id: 3, name: 'Dragon Scale', emoji: '🐉', rarity: 'Mythic', power: 60, owned: false, description: 'Scale from a legendary dragon', price: 5000 },
    { id: 4, name: 'Ancient Crown', emoji: '👑', rarity: 'Legendary', power: 55, owned: false, description: 'Crown of ancient kings', price: 4500 },
    { id: 5, name: 'Mystic Orb', emoji: '🔮', rarity: 'Epic', power: 45, owned: false, description: 'Orb with magical powers', price: 3000 },
    { id: 6, name: 'Holy Grail', emoji: '🏆', rarity: 'Mythic', power: 70, owned: false, description: 'The legendary Holy Grail', price: 8000 },
    { id: 7, name: 'Ancient Coin', emoji: '🪙', rarity: 'Rare', power: 25, owned: true, description: 'Old golden coin' },
    { id: 8, name: 'Royal Gem', emoji: '💎', rarity: 'Mythic', power: 65, owned: false, description: 'Gem of the royal family', price: 6000 }
  ]);

  const handleBuyAntique = (antique) => {
    if (antique.owned) {
      Alert.alert('Already Owned', '✅ You already have this antique!');
    } else {
      Alert.alert(
        `Buy ${antique.name}?`,
        `Price: ${antique.price} Coins\nRarity: ${antique.rarity}\nPower: +${antique.power}`,
        [
          { text: 'Cancel', onPress: () => {} },
          { text: 'Buy', onPress: () => Alert.alert('Success!', `${antique.name} purchased! ✅`) }
        ]
      );
    }
  };

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Mythic': return '#9D4EDD';
      case 'Legendary': return '#FFD700';
      case 'Epic': return '#FF6B00';
      case 'Rare': return '#00A8FF';
      default: return '#888';
    }
  };

  const renderAntiqueItem = ({ item }) => (
    <View style={[styles.antiqueCard, { borderColor: getRarityColor(item.rarity) }]}>
      <View style={styles.antiqueHeader}>
        <Text style={styles.antiqueEmoji}>{item.emoji}</Text>
        <View style={styles.antiqueTitleSection}>
          <Text style={styles.antiqueName}>{item.name}</Text>
          <Text style={[styles.antiqueRarity, { color: getRarityColor(item.rarity) }]}>{item.rarity}</Text>
        </View>
      </View>
      <Text style={styles.antiqueDesc}>{item.description}</Text>
      <View style={styles.antiqueStatsBar}>
        <Text style={styles.powerText}>Power: +{item.power}</Text>
      </View>
      <TouchableOpacity 
        style={[styles.buyButton, { backgroundColor: item.owned ? '#00AA00' : '#FF6B00' }]}
        onPress={() => handleBuyAntique(item)}
      >
        <Text style={styles.buyButtonText}>{item.owned ? '✅ Owned' : `💰 ${item.price}`}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏺 Antiques Collection</Text>
        <Text style={styles.headerSubtitle}>Collect rare items to boost your power</Text>
      </View>

      <View style={styles.rarityLegend}>
        <Text style={styles.legendItem}>👑 <Text style={{ color: '#9D4EDD' }}>Mythic</Text></Text>
        <Text style={styles.legendItem}>⭐ <Text style={{ color: '#FFD700' }}>Legendary</Text></Text>
        <Text style={styles.legendItem}>🌟 <Text style={{ color: '#FF6B00' }}>Epic</Text></Text>
        <Text style={styles.legendItem}>💫 <Text style={{ color: '#00A8FF' }}>Rare</Text></Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={antiques}
        renderItem={renderAntiqueItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  header: { alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FF6B00', marginBottom: 5 },
  headerSubtitle: { fontSize: 12, color: '#888' },
  rarityLegend: { flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#1a1a1a', borderRadius: 8, padding: 12, marginBottom: 20 },
  legendItem: { color: '#FFF', fontSize: 11, marginRight: 15, marginVertical: 5 },
  antiqueCard: { backgroundColor: '#1a1a1a', borderWidth: 2, borderRadius: 12, padding: 15, marginBottom: 12 },
  antiqueHeader: { flexDirection: 'row', marginBottom: 10 },
  antiqueEmoji: { fontSize: 36, marginRight: 12 },
  antiqueTitleSection: { flex: 1, justifyContent: 'center' },
  antiqueName: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 3 },
  antiqueRarity: { fontSize: 11, fontWeight: 'bold' },
  antiqueDesc: { color: '#888', fontSize: 12, marginBottom: 10 },
  antiqueStatsBar: { backgroundColor: '#0a0a0a', borderRadius: 4, padding: 8, marginBottom: 10 },
  powerText: { color: '#FF6B00', fontSize: 12, fontWeight: 'bold' },
  buyButton: { paddingVertical: 12, borderRadius: 6, alignItems: 'center' },
  buyButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }
});

export default AntiquesScreen;