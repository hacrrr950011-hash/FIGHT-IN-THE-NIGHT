import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
const FightingScreen = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const maps = [{ name: 'Jungle', emoji: '🌴' }, { name: 'City', emoji: '🏙️' }, { name: 'Desert', emoji: '🏜️' }, { name: 'Space', emoji: '🚀' }, { name: 'Snow', emoji: '❄️' }];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jannu Mode</Text>
        <TouchableOpacity style={[styles.modeBox, selectedMode === 'jannu' && styles.selectedMode]} onPress={() => setSelectedMode('jannu')}>
          <Text style={styles.modeEmoji}>🤖</Text>
          <Text style={styles.modeName}>Jannu (AI)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pro Mode</Text>
        <TouchableOpacity style={[styles.modeBox, selectedMode === 'pro' && styles.selectedMode]} onPress={() => setSelectedMode('pro')}>
          <Text style={styles.modeEmoji}>⚔️</Text>
          <Text style={styles.modeName}>Pro (PvP)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Maps</Text>
        <View style={styles.mapsGrid}>
          {maps.map((map, index) => (
            <TouchableOpacity key={index} style={styles.mapBox} onPress={() => selectedMode && Alert.alert('Fight Started!', `Mode: ${selectedMode}\nMap: ${map.name}`)}>
              <Text style={styles.mapEmoji}>{map.emoji}</Text>
              <Text style={styles.mapName}>{map.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  section: { marginBottom: 25 },
  sectionTitle: { color: '#FF6B00', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  modeBox: { backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 2, borderRadius: 12, padding: 20, alignItems: 'center' },
  selectedMode: { borderColor: '#FF6B00', backgroundColor: '#2a1a0a' },
  modeEmoji: { fontSize: 40, marginBottom: 10 },
  modeName: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  mapsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  mapBox: { width: '48%', backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 15, alignItems: 'center', marginBottom: 10 },
  mapEmoji: { fontSize: 36, marginBottom: 8 },
  mapName: { color: '#FFF', fontSize: 14, fontWeight: '600' }
});
export default FightingScreen;