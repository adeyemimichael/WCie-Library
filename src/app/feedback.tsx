import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../theme';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Ionicons } from '@expo/vector-icons';

export default function FeedbackModal() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.handle} />
      <Text style={styles.title}>How was this resource?</Text>
      <Text style={styles.subtitle}>Your feedback helps us improve.</Text>

      <View style={styles.starsRow}>
         {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
               <Ionicons name={star <= rating ? "star" : "star-outline"} size={40} color={star <= rating ? "#F59E0B" : Colors.neutral} />
            </TouchableOpacity>
         ))}
      </View>

      <Input 
         placeholder="Leave a review or comment..." 
         value={feedback} 
         onChangeText={setFeedback} 
         multiline 
         style={{ height: 120, textAlignVertical: 'top', paddingTop: Spacing.md }} 
      />

      <Button title="Submit Feedback" onPress={() => router.back()} style={styles.submitBtn} disabled={rating === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, padding: Spacing.xl, borderTopLeftRadius: Radii.lg * 2, borderTopRightRadius: Radii.lg * 2, marginTop: 'auto' },
  handle: { width: 40, height: 4, backgroundColor: Colors.border, borderRadius: 2, alignSelf: 'center', marginBottom: Spacing.lg },
  title: { fontFamily: Fonts.heading, fontSize: 24, color: Colors.text, textAlign: 'center', marginBottom: Spacing.xs },
  subtitle: { fontFamily: Fonts.body, fontSize: 14, color: Colors.textLight, textAlign: 'center', marginBottom: Spacing.xl },
  starsRow: { flexDirection: 'row', justifyContent: 'center', gap: Spacing.md, marginBottom: Spacing.xl },
  submitBtn: { marginTop: Spacing.xl },
});
