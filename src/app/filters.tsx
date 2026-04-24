import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../theme';
import { Button } from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

export default function FiltersModal() {
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const formats = ['All', 'eBook', 'Audio', 'Video'];
  const topics = ['All', 'Faith', 'Vision', 'Life Skills', 'Bible Study', 'Devotional'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color={Colors.text} />
         </TouchableOpacity>
         <Text style={styles.title}>Filter Search</Text>
         <TouchableOpacity>
            <Text style={styles.resetText}>Reset</Text>
         </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
         <Text style={styles.sectionTitle}>Content Format</Text>
         <View style={styles.chipRow}>
            {formats.map(f => (
               <TouchableOpacity 
                  key={f} 
                  style={[styles.chip, selectedFormat === f && styles.chipActive]}
                  onPress={() => setSelectedFormat(f)}
               >
                  <Text style={[styles.chipText, selectedFormat === f && styles.chipTextActive]}>{f}</Text>
               </TouchableOpacity>
            ))}
         </View>

         <View style={styles.divider} />

         <Text style={styles.sectionTitle}>Topics / Categories</Text>
         <View style={styles.chipRow}>
            {topics.map(t => (
               <TouchableOpacity 
                  key={t} 
                  style={[styles.chip, selectedTopic === t && styles.chipActive]}
                  onPress={() => setSelectedTopic(t)}
               >
                  <Text style={[styles.chipText, selectedTopic === t && styles.chipTextActive]}>{t}</Text>
               </TouchableOpacity>
            ))}
         </View>
      </ScrollView>

      <View style={styles.footer}>
         <Button title="Apply Filters" onPress={() => router.back()} style={{ width: '100%' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, borderTopLeftRadius: Radii.lg * 2, borderTopRightRadius: Radii.lg * 2, marginTop: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Spacing.xl, borderBottomWidth: 1, borderBottomColor: Colors.border },
  title: { fontFamily: Fonts.headingMedium, fontSize: 18, color: Colors.text },
  resetText: { fontFamily: Fonts.bodyMedium, fontSize: 14, color: Colors.primary },
  content: { padding: Spacing.xl },
  sectionTitle: { fontFamily: Fonts.headingMedium, fontSize: 16, color: Colors.text, marginBottom: Spacing.md },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chip: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderWidth: 1, borderColor: Colors.border, borderRadius: Radii.full, backgroundColor: Colors.white },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { fontFamily: Fonts.bodyMedium, color: Colors.text },
  chipTextActive: { color: Colors.white },
  divider: { height: 1, backgroundColor: Colors.border, marginVertical: Spacing.xl },
  footer: { padding: Spacing.xl, borderTopWidth: 1, borderTopColor: Colors.border },
});
