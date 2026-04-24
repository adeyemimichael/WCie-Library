import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function AdminUploadScreen() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Upload Resource</Text>
        </View>

        <TouchableOpacity style={styles.uploadArea}>
           <Ionicons name="cloud-upload" size={48} color={Colors.primary} />
           <Text style={styles.uploadText}>Tap to select Video, Audio, or PDF</Text>
        </TouchableOpacity>

        <View style={styles.formArea}>
           <Input label="Title" placeholder="Enter resource title" value={title} onChangeText={setTitle} />
           <Input label="Author / Speaker" placeholder="Name" value={author} onChangeText={setAuthor} />
           <Input label="Description" placeholder="Brief summary" value={description} onChangeText={setDescription} multiline style={{ height: 100 }} />
           
           <Text style={styles.label}>Select Category</Text>
           <View style={styles.chipRow}>
              {['Devotional', 'Sermon', 'Life Skills', 'Bible Study'].map((cat, i) => (
                 <TouchableOpacity key={cat} style={[styles.chip, i === 0 && styles.chipActive]}>
                    <Text style={[styles.chipText, i === 0 && styles.chipTextActive]}>{cat}</Text>
                 </TouchableOpacity>
              ))}
           </View>

           <Button title="Publish Resource" onPress={() => {}} style={{ marginTop: Spacing.xl }} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { padding: Spacing.xl, paddingBottom: Spacing.xxl * 2 },
  header: { marginBottom: Spacing.xl },
  title: { fontFamily: Fonts.heading, fontSize: 28, color: Colors.text },
  uploadArea: { height: 150, borderWidth: 2, borderColor: Colors.primary, borderStyle: 'dashed', borderRadius: Radii.lg, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightRed, marginBottom: Spacing.xl },
  uploadText: { fontFamily: Fonts.bodyMedium, color: Colors.primary, marginTop: Spacing.sm },
  formArea: { flex: 1 },
  label: { fontFamily: Fonts.bodyMedium, fontSize: 14, color: Colors.text, marginBottom: Spacing.sm, marginTop: Spacing.md },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chip: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderWidth: 1, borderColor: Colors.border, borderRadius: Radii.full, backgroundColor: Colors.white },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { fontFamily: Fonts.bodyMedium, color: Colors.text },
  chipTextActive: { color: Colors.white },
});
