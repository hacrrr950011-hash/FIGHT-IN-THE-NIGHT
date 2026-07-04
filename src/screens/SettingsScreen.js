import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
const SettingsScreen = () => {
  const [soundSettings, setSoundSettings] = useState({ master: true, music: true, effects: true, voice: true, vibration: true });
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const languages = [{ code: 'en', name: 'English' }, { code: 'hi', name: 'हिंदी' }, { code: 'te', name: 'తెలుగు' }, { code: 'gu', name: 'ગુજરાતી' }, { code: 'ur', name: 'اردو' }];
  const handleToggle = (setting) => { setSoundSettings({ ...soundSettings, [setting]: !soundSettings[setting] }); };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sound Settings</Text>
        {['master', 'music', 'effects', 'voice', 'vibration'].map((key) => (
          <View key={key} style={styles.settingItem}>
            <Text style={styles.settingLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            <Switch value={soundSettings[key]} onValueChange={() => handleToggle(key)} trackColor={{ false: '#333', true: '#FF6B00' }} />
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        {languages.map((lang) => (
          <TouchableOpacity key={lang.code} style={styles.languageOption} onPress={() => setSelectedLanguage(lang.code)}>
            <Text style={[styles.languageName, selectedLanguage === lang.code && styles.selectedLanguage]}>{lang.name}</Text>
            {selectedLanguage === lang.code && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.paymentBox}>
        <Text style={styles.paymentLabel}>UPI Payment</Text>
        <Text style={styles.upiId}>7317629887@nyes</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => Alert.alert('Logout', 'Are you sure?')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 15 },
  section: { backgroundColor: '#1a1a1a', borderColor: '#333', borderWidth: 1, borderRadius: 8, padding: 15, marginBottom: 20 },
  sectionTitle: { color: '#FF6B00', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomColor: '#333', borderBottomWidth: 1 },
  settingLabel: { color: '#FFF', fontSize: 14 },
  languageOption: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomColor: '#333', borderBottomWidth: 1 },
  languageName: { color: '#888', fontSize: 14 },
  selectedLanguage: { color: '#FF6B00', fontWeight: 'bold' },
  checkmark: { color: '#FF6B00', fontSize: 16 },
  paymentBox: { backgroundColor: '#1a1a1a', borderColor: '#FF6B00', borderWidth: 2, borderRadius: 8, padding: 15, marginBottom: 20, alignItems: 'center' },
  paymentLabel: { color: '#888', fontSize: 12, marginBottom: 8 },
  upiId: { color: '#FF6B00', fontSize: 16, fontWeight: 'bold' },
  logoutButton: { backgroundColor: '#FF6B00', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  logoutText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});
export default SettingsScreen;