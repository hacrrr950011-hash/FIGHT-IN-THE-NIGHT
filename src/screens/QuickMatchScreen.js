import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';

const QuickMatchScreen = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Alpha', level: 42, wins: 110, avatar: '🥋' },
    { id: 2, name: 'Beta', level: 38, wins: 95, avatar: '⚡' },
    { id: 3, name: 'Gamma', level: 45, wins: 130, avatar: '🔥' },
    { id: 4, name: 'Delta', level: 40, wins: 105, avatar: '❄️' },
    { id: 5, name: 'Epsilon', level: 50, wins: 160, avatar: '⭐' }
  ]);

  const handleFightRequest = (opponent) => {
    Alert.alert(
      'Fight Request',
      `Challenge ${opponent.name}?\n\nLevel: ${opponent.level}\nWins: ${opponent.wins}`,
      [
        { text: 'Cancel', onPress: () => {} },
        { text: 'Fight!', onPress: () => Alert.alert('Battle Start!', `Fighting ${opponent.name}...\nGood Luck! ⚔️`) }
      ]
    );
  };

  const renderPlayerCard = ({ item }) => (
    <View style={styles.playerCard}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerAvatar}>{item.avatar}</Text>
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{item.name}</Text>
          <Text style={styles.playerStats}>Lvl {item.level} • {item.wins} Wins</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.fightButton}
        onPress={() => handleFightRequest(item)}
      >
        <Text style={styles.fightButtonText}>⚔️ Fight</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎯 Quick Match</Text>
        <Text style={styles.headerSubtitle}>Vote & Challenge Real Players</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>🌟 VIP Members get matched faster!</Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={players}
        renderItem={renderPlayerCard}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.refreshBox}>
        <TouchableOpacity style={styles.refreshButton}>
          <Text style={styles.refreshButtonText}>🔄 Refresh Players</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  header: { alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FF6B00', marginBottom: 5 },
  headerSubtitle: { fontSize: 12, color: '#888' },
  infoBox: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 20, alignItems: 'center' },
  infoText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  playerCard: { flexDirection: 'row', backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 15, marginBottom: 10, alignItems: 'center', justifyContent: 'space-between' },
  playerInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  playerAvatar: { fontSize: 40, marginRight: 15 },
  playerDetails: { flex: 1 },
  playerName: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 3 },
  playerStats: { fontSize: 12, color: '#888' },
  fightButton: { backgroundColor: '#FF6B00', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 6 },
  fightButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  refreshBox: { alignItems: 'center', marginVertical: 20 },
  refreshButton: { backgroundColor: '#FF6B00', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 8 },
  refreshButtonText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' }
});

export default QuickMatchScreen;