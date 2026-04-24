import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

const SAVED_ITEMS = [
  { id: '1', title: 'The Power of Vision', author: 'David O. Oyedepo', type: 'book' },
  { id: '3', title: 'Youth Arise (Conference)', author: 'WCIE', type: 'video' },
];

export default function BookmarksScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Items</Text>
        <Text style={styles.subtitle}>Your personal collection</Text>
      </View>

      <FlatList
        data={SAVED_ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
           <View style={styles.emptyState}>
              <Ionicons name="bookmark" size={64} color={Colors.border} />
              <Text style={styles.emptyText}>No saved items yet.</Text>
           </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resourceCard}>
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
            <Ionicons name="bookmark" size={24} color={Colors.primary} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { padding: Spacing.xl, paddingBottom: Spacing.lg },
  title: { fontFamily: Fonts.heading, fontSize: 28, color: Colors.text },
  subtitle: { fontFamily: Fonts.body, fontSize: 16, color: Colors.textLight },
  listContainer: { paddingHorizontal: Spacing.xl, paddingBottom: Spacing.xxl * 3, gap: Spacing.md },
  resourceCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, padding: Spacing.md, borderRadius: Radii.lg },
  iconPlaceholder: { width: 60, height: 60, backgroundColor: Colors.lightRed, borderRadius: Radii.md, justifyContent: 'center', alignItems: 'center', marginRight: Spacing.md },
  resourceDetails: { flex: 1 },
  resourceTitle: { fontFamily: Fonts.headingMedium, fontSize: 16, color: Colors.text, marginBottom: 4 },
  resourceAuthor: { fontFamily: Fonts.body, fontSize: 14, color: Colors.textLight },
  emptyState: { alignItems: 'center', marginTop: 100 },
  emptyText: { fontFamily: Fonts.bodyMedium, color: Colors.textLight, marginTop: Spacing.md },
});
