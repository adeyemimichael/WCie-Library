import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Button } from '../../components/Button';

export default function ProfileScreen() {
  const handleLogout = () => {
    // Navigate back to auth
    router.replace('/(auth)/sign-in');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarPlaceholder}>
             <Ionicons name="person" size={40} color={Colors.white} />
          </View>
          <Text style={styles.userName}>Ayobami</Text>
          <Text style={styles.userEmail}>ayobami@example.com</Text>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          
          <TouchableOpacity style={styles.settingItem} onPress={() => router.push('/edit-profile')}>
             <Ionicons name="person-outline" size={24} color={Colors.text} style={styles.settingIcon} />
             <Text style={styles.settingText}>Edit Profile</Text>
             <Ionicons name="chevron-forward" size={20} color={Colors.neutral} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={() => router.push('/notifications')}>
             <Ionicons name="notifications-outline" size={24} color={Colors.text} style={styles.settingIcon} />
             <Text style={styles.settingText}>Notifications</Text>
             <Ionicons name="chevron-forward" size={20} color={Colors.neutral} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
             <Ionicons name="lock-closed-outline" size={24} color={Colors.text} style={styles.settingIcon} />
             <Text style={styles.settingText}>Privacy & Security</Text>
             <Ionicons name="chevron-forward" size={20} color={Colors.neutral} />
          </TouchableOpacity>
        </View>

        <Button
          title="Log Out"
          variant="outlined"
          onPress={handleLogout}
          style={styles.logoutButton}
          icon={<Ionicons name="log-out-outline" size={20} color={Colors.primary} />}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: Spacing.xl,
    paddingBottom: Spacing.xxl * 2,
  },
  header: {
    marginBottom: Spacing.lg,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.text,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.xl,
    borderRadius: Radii.lg,
    marginBottom: Spacing.xl,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  userName: {
    fontFamily: Fonts.headingMedium,
    fontSize: 20,
    color: Colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textLight,
  },
  settingsSection: {
    marginBottom: Spacing.xxl,
  },
  sectionTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    color: Colors.textLight,
    marginBottom: Spacing.md,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.md,
    borderRadius: Radii.md,
    marginBottom: Spacing.sm,
  },
  settingIcon: {
    marginRight: Spacing.md,
  },
  settingText: {
    flex: 1,
    fontFamily: Fonts.bodyMedium,
    fontSize: 16,
    color: Colors.text,
  },
  logoutButton: {
    marginTop: 'auto',
  },
});
