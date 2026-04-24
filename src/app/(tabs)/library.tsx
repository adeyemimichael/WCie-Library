import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Input } from '../../components/Input';
import { router } from 'expo-router';

const LIBRARY_DATA = [
  { id: '1', title: 'The Power of Vision', author: 'David O. Oyedepo', type: 'book' },
  { id: '2', title: 'Understanding Faith', author: 'David O. Oyedepo', type: 'audio' },
  { id: '3', title: 'Youth Arise (Conference)', author: 'WCIE', type: 'video' },
  { id: '4', title: 'Winning in Life', author: 'David O. Oyedepo', type: 'book' },
];

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Books', 'Audio', 'Video'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <TouchableOpacity onPress={() => router.push('/filters')}>
           <Ionicons name="options" size={28} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Input
          placeholder="Search resources..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          leftIcon={<Ionicons name="search-outline" size={20} color={Colors.neutral} />}
        />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={LIBRARY_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
             style={styles.resourceCard}
             onPress={() => router.push(`/resource/${item.id}`)}
          >
            <View style={styles.iconPlaceholder}>
              <Ionicons
                name={item.type === 'book' ? 'book' : item.type === 'audio' ? 'headset' : 'videocam'}
                size={24}
                color={Colors.primary}
              />
            </View>
            <View style={styles.resourceDetails}>
              <Text style={styles.resourceTitle}>{item.title}</Text>
              <Text style={styles.resourceAuthor}>{item.author}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.neutral} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.xl,
    paddingBottom: Spacing.sm,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.text,
  },
  searchContainer: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.md,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.lg,
    gap: Spacing.sm,
  },
  tab: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: Radii.full,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activeTab: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.text,
  },
  activeTabText: {
    color: Colors.white,
  },
  listContainer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxl * 3,
    gap: Spacing.md,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.md,
    borderRadius: Radii.lg,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: Colors.lightRed,
    borderRadius: Radii.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  resourceDetails: {
    flex: 1,
  },
  resourceTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  resourceAuthor: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textLight,
  },
});
