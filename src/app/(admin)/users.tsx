import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Input } from '../../components/Input';
import { Ionicons } from '@expo/vector-icons';

const MOCK_USERS = [
  { id: '1', name: 'John Doe', email: 'john@example.com', active: true },
  { id: '2', name: 'Sarah Mike', email: 'sarah@example.com', active: true },
  { id: '3', name: 'Peter Pan', email: 'peter@example.com', active: false },
];

export default function AdminUsersScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Users Management</Text>
      </View>
      
      <View style={styles.searchWrap}>
         <Input placeholder="Search users by name or email" value={search} onChangeText={setSearch} leftIcon={<Ionicons name="search" size={20} color={Colors.neutral} />} />
      </View>

      <FlatList
        data={MOCK_USERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.userCard}>
             <View style={styles.avatar}>
                <Ionicons name="person" size={24} color={Colors.white} />
             </View>
             <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
             </View>
             <View style={[styles.statusIndicator, { backgroundColor: item.active ? Colors.success : Colors.neutral }]} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { padding: Spacing.xl, paddingBottom: Spacing.sm },
  title: { fontFamily: Fonts.heading, fontSize: 28, color: Colors.text },
  searchWrap: { paddingHorizontal: Spacing.xl, marginBottom: Spacing.md },
  list: { paddingHorizontal: Spacing.xl, paddingBottom: Spacing.xxl * 2, gap: Spacing.sm },
  userCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, padding: Spacing.md, borderRadius: Radii.lg, borderWidth: 1, borderColor: Colors.border },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: Colors.tertiary, justifyContent: 'center', alignItems: 'center', marginRight: Spacing.md },
  userInfo: { flex: 1 },
  userName: { fontFamily: Fonts.headingMedium, fontSize: 16, color: Colors.text },
  userEmail: { fontFamily: Fonts.body, fontSize: 14, color: Colors.textLight },
  statusIndicator: { width: 12, height: 12, borderRadius: 6 },
});
