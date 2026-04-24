import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../theme';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const [name, setName] = useState('Ayobami');
  const [email, setEmail] = useState('ayobami@example.com');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color={Colors.text} />
         </TouchableOpacity>
         <Text style={styles.title}>Edit Profile</Text>
         <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
         <View style={styles.avatarSection}>
            <View style={styles.avatar}>
               <Ionicons name="person" size={40} color={Colors.white} />
            </View>
            <TouchableOpacity>
               <Text style={styles.changePhoto}>Change Photo</Text>
            </TouchableOpacity>
         </View>

         <Input label="Full Name" value={name} onChangeText={setName} />
         <Input label="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
         
         <Button title="Save Changes" style={styles.saveBtn} onPress={() => router.back()} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Spacing.xl, borderBottomWidth: 1, borderBottomColor: Colors.border, backgroundColor: Colors.white },
  title: { fontFamily: Fonts.headingMedium, fontSize: 18, color: Colors.text },
  content: { padding: Spacing.xl },
  avatarSection: { alignItems: 'center', marginBottom: Spacing.xxl },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.tertiary, justifyContent: 'center', alignItems: 'center', marginBottom: Spacing.sm },
  changePhoto: { fontFamily: Fonts.bodyMedium, color: Colors.primary },
  saveBtn: { marginTop: Spacing.xl },
});
