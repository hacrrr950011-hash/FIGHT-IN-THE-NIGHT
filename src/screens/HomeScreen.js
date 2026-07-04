import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
const HomeScreen = () => {
  const playerData = { level: 45, xp: 7850, maxXp: 10000, coins: 50000, gems: 250, wins: 125, losses: 45 };
  const winRate = ((playerData.wins / (playerData.wins + playerData.losses)) * 100).toFixed(1);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.playerCard}>
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Player #{playerData.level}</Text>
          <Text style={styles.levelText}>Level {playerData.level}</Text>
        </View>
      </View>
      <View style={styles.resourcesContainer}>
        <View style={styles.resourceBox}>
          <Text style={styles.resourceLabel}>Coins</Text>
          <Text style={styles.resourceValue}>{playerData.coins.toLocaleString()}</Text>
        </View>
        <View style={styles.resourceBox}>
          <Text style={styles.resourceLabel}>Gems</Text>
          <Text style={styles.resourceValue}>{playerData.gems}</Text>
        </View>
      </View>
      <View style={styles.xpContainer}>
        <Text style={styles.xpLabel}>XP: {playerData.xp}/{playerData.maxXp}</Text>
        <View style={styles.xpBar}>
          <View style={[styles.xpFill, { width: `${(playerData.xp / playerData.maxXp) * 100}%` }]} />
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Wins</Text>
          <Text style={styles.statValue}>{playerData.wins}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Losses</Text>
          <Text style={styles.statValue}>{playerData.losses}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Win Rate</Text>
          <Text style={styles.statValue}>{winRate}%</Text>
        </View>
      </View>
      <View style={styles.antiCheatBox}>
        <Text style={styles.antiCheatLabel}>Anti-Cheat System</Text>
        <Text style={styles.activeStatus}>🟢 ACTIVE</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  playerCard: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 2, borderRadius: 12, padding: 20, marginBottom: 20 },
  playerInfo: { flex: 1 },
  playerName: { fontSize: 24, fontWeight: 'bold', color: '#FF6B00', marginBottom: 5 },
  levelText: { fontSize: 14, color: '#888' },
  resourcesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  resourceBox: { flex: 1, backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 15, alignItems: 'center', marginHorizontal: 5 },
  resourceLabel: { color: '#888', fontSize: 12, marginBottom: 5 },
  resourceValue: { fontSize: 20, fontWeight: 'bold', color: '#FF6B00' },
  xpContainer: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 15, marginBottom: 20 },
  xpLabel: { color: '#FFF', fontSize: 12, marginBottom: 8 },
  xpBar: { backgroundColor: '#0a0a0a', borderRadius: 4, height: 8, overflow: 'hidden' },
  xpFill: { backgroundColor: '#FF6B00', height: '100%' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { flex: 1, backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 12, alignItems: 'center', marginHorizontal: 5 },
  statLabel: { color: '#888', fontSize: 10, marginBottom: 5 },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#FF6B00' },
  antiCheatBox: { backgroundColor: '#1a1a1a', borderColor: '#00FF00', borderWidth: 2, borderRadius: 8, padding: 15, alignItems: 'center', marginBottom: 20 },
  antiCheatLabel: { color: '#888', fontSize: 12, marginBottom: 5 },
  activeStatus: { color: '#00FF00', fontSize: 16, fontWeight: 'bold' }
});
export default HomeScreen;