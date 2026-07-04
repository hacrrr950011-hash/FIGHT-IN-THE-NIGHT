import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';

const ProfileScreen = () => {
  const [userProfile, setUserProfile] = useState({
    username: 'Player#45',
    level: 45,
    vip: true,
    vipExpiry: '2026-08-04',
    avatar: '🎨',
    banner: '⭐🌈✨',
    coins: 50000,
    gems: 250,
    wins: 125,
    losses: 45,
    joinDate: '2026-01-15'
  });

  const handleVIPPurchase = () => {
    Alert.alert(
      'VIP Membership - ₹2000',
      'Get VIP for 30 days!\n\n✅ +100 Coins Daily\n✅ James Character\n✅ VIP Badge\n✅ Ad-free\n✅ Early Match Access',
      [
        { text: 'Cancel', onPress: () => {} },
        { text: 'Pay with UPI: 7317629887@nyes', onPress: () => Alert.alert('Success', 'VIP Activated!') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>⭐ 🌈 ✨ 🎨 💫 🌟</Text>
        </View>
      </View>

      {/* Avatar & VIP Badge */}
      <View style={styles.avatarSection}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarEmoji}>🎭</Text>
          {userProfile.vip && (
            <View style={styles.vipBadge}>
              <Text style={styles.vipText}>VIP</Text>
            </View>
          )}
        </View>
        <Text style={styles.username}>{userProfile.username}</Text>
        <Text style={styles.level}>Level {userProfile.level}</Text>
        {userProfile.vip && (
          <Text style={styles.vipStatus}>👑 VIP Active until {userProfile.vipExpiry}</Text>
        )}
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Wins</Text>
          <Text style={styles.statValue}>{userProfile.wins}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Losses</Text>
          <Text style={styles.statValue}>{userProfile.losses}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Coins</Text>
          <Text style={styles.statValue}>{userProfile.coins}</Text>
        </View>
      </View>

      {/* VIP Section */}
      {!userProfile.vip ? (
        <TouchableOpacity style={styles.vipOfferBox} onPress={handleVIPPurchase}>
          <Text style={styles.vipOfferTitle}>🌟 Unlock VIP Membership</Text>
          <Text style={styles.vipOfferPrice}>₹2000 for 30 days</Text>
          <View style={styles.vipBenefits}>
            <Text style={styles.benefit}>✅ +100 Coins Every Day</Text>
            <Text style={styles.benefit}>✅ James Character</Text>
            <Text style={styles.benefit}>✅ Ad-Free Experience</Text>
            <Text style={styles.benefit}>✅ Early Match Access</Text>
          </View>
          <TouchableOpacity style={styles.vipButton}>
            <Text style={styles.vipButtonText}>Get VIP Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <View style={styles.vipActiveBox}>
          <Text style={styles.vipActiveTitle}>👑 VIP Active</Text>
          <Text style={styles.vipActiveBenefits}>Enjoy all premium benefits!</Text>
        </View>
      )}

      {/* Antiques Collection */}
      <View style={styles.antiquesSection}>
        <Text style={styles.sectionTitle}>🏺 Antiques Collection</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.antiqueItem}>
            <Text style={styles.antiqueEmoji}>🏛️</Text>
            <Text style={styles.antiqueName}>Ancient Sword</Text>
            <Text style={styles.antiqueRarity}>Legendary</Text>
          </View>
          <View style={styles.antiqueItem}>
            <Text style={styles.antiqueEmoji}>⚱️</Text>
            <Text style={styles.antiqueName}>Golden Urn</Text>
            <Text style={styles.antiqueRarity}>Epic</Text>
          </View>
          <View style={styles.antiqueItem}>
            <Text style={styles.antiqueEmoji}>🪙</Text>
            <Text style={styles.antiqueName}>Ancient Coin</Text>
            <Text style={styles.antiqueRarity}>Rare</Text>
          </View>
          <View style={styles.antiqueItem}>
            <Text style={styles.antiqueEmoji}>💎</Text>
            <Text style={styles.antiqueName}>Royal Gem</Text>
            <Text style={styles.antiqueRarity}>Mythic</Text>
          </View>
        </ScrollView>
      </View>

      {/* James Character */}
      <View style={styles.characterSection}>
        <Text style={styles.sectionTitle}>🎮 James Character</Text>
        <View style={styles.characterCard}>
          <Text style={styles.characterEmoji}>🕵️</Text>
          <Text style={styles.characterName}>James - Elite Agent</Text>
          <Text style={styles.characterDesc}>VIP Exclusive Character</Text>
          {userProfile.vip ? (
            <Text style={styles.owned}>✅ Owned</Text>
          ) : (
            <Text style={styles.lockedText}>🔒 VIP Only</Text>
          )}
        </View>
      </View>

      {/* Daily Bonus */}
      <View style={styles.dailyBonusSection}>
        <Text style={styles.sectionTitle}>🎁 Daily Bonus</Text>
        {userProfile.vip ? (
          <View style={styles.bonusBox}>
            <Text style={styles.bonusText}>+100 Coins Today ✅</Text>
            <Text style={styles.bonusDesc}>Come back tomorrow for more!</Text>
          </View>
        ) : (
          <View style={styles.bonusBox}>
            <Text style={styles.bonusText}>Get VIP for +100 Daily Coins</Text>
          </View>
        )}
      </View>

      {/* Join Date */}
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Member Since</Text>
        <Text style={styles.infoValue}>{userProfile.joinDate}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  bannerContainer: { height: 150, overflow: 'hidden' },
  banner: { 
    backgroundColor: '#1a1a1a', 
    borderBottomColor: '#FF6B00',
    borderBottomWidth: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  bannerText: { fontSize: 32, letterSpacing: 5 },
  
  avatarSection: { alignItems: 'center', marginVertical: 20 },
  avatarContainer: { position: 'relative', marginBottom: 15 },
  avatarEmoji: { fontSize: 80 },
  vipBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD700',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF6B00'
  },
  vipText: { color: '#000', fontSize: 12, fontWeight: 'bold' },
  username: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 5 },
  level: { fontSize: 14, color: '#888', marginBottom: 5 },
  vipStatus: { fontSize: 12, color: '#FFD700', fontWeight: 'bold' },
  
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 15, marginVertical: 20 },
  statBox: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 1, borderRadius: 8, padding: 15, alignItems: 'center', flex: 1, marginHorizontal: 5 },
  statLabel: { color: '#888', fontSize: 12, marginBottom: 5 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#FF6B00' },
  
  vipOfferBox: { backgroundColor: '#2a1a0a', borderColor: '#FFD700', borderWidth: 2, borderRadius: 12, margin: 15, padding: 20, alignItems: 'center' },
  vipOfferTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
  vipOfferPrice: { fontSize: 24, fontWeight: 'bold', color: '#FF6B00', marginBottom: 15 },
  vipBenefits: { width: '100%', marginBottom: 15 },
  benefit: { color: '#FFF', fontSize: 12, marginVertical: 5 },
  vipButton: { backgroundColor: '#FFD700', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8, alignItems: 'center', width: '100%' },
  vipButtonText: { color: '#000', fontSize: 14, fontWeight: 'bold' },
  
  vipActiveBox: { backgroundColor: '#1a2a1a', borderColor: '#00FF00', borderWidth: 2, borderRadius: 12, margin: 15, padding: 20, alignItems: 'center' },
  vipActiveTitle: { fontSize: 18, fontWeight: 'bold', color: '#00FF00', marginBottom: 10 },
  vipActiveBenefits: { color: '#888', fontSize: 12 },
  
  sectionTitle: { color: '#FF6B00', fontSize: 16, fontWeight: 'bold', marginLeft: 15, marginTop: 20, marginBottom: 10 },
  
  antiquesSection: { paddingHorizontal: 15, marginVertical: 10 },
  antiqueItem: { backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 15, marginRight: 10, alignItems: 'center', minWidth: 100 },
  antiqueEmoji: { fontSize: 32, marginBottom: 8 },
  antiqueName: { color: '#FFF', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  antiqueRarity: { color: '#FF6B00', fontSize: 10, marginTop: 5 },
  
  characterSection: { paddingHorizontal: 15, marginVertical: 15 },
  characterCard: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 2, borderRadius: 12, padding: 20, alignItems: 'center' },
  characterEmoji: { fontSize: 48, marginBottom: 10 },
  characterName: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 5 },
  characterDesc: { fontSize: 12, color: '#888', marginBottom: 10 },
  owned: { color: '#00FF00', fontSize: 12, fontWeight: 'bold' },
  lockedText: { color: '#FF6B00', fontSize: 12, fontWeight: 'bold' },
  
  dailyBonusSection: { paddingHorizontal: 15, marginVertical: 15 },
  bonusBox: { backgroundColor: '#1a1a1a', borderColor: '#FFD700', borderWidth: 2, borderRadius: 8, padding: 15, alignItems: 'center' },
  bonusText: { fontSize: 14, fontWeight: 'bold', color: '#FFD700', marginBottom: 5 },
  bonusDesc: { fontSize: 12, color: '#888' },
  
  infoBox: { backgroundColor: '#1a1a1a', margin: 15, padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 30 },
  infoLabel: { color: '#888', fontSize: 12, marginBottom: 5 },
  infoValue: { fontSize: 14, fontWeight: 'bold', color: '#FFF' }
});

export default ProfileScreen;