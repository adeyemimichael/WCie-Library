import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

export default function BookReaderScreen() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Overlay */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
           <Ionicons name="arrow-back" size={28} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerMeta}>
           <Text style={styles.headerTitle} numberOfLines={1}>The Power of Vision & Faith</Text>
           <Text style={styles.headerSubtitle}>Chapter 3</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
           <Ionicons name="text" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      {/* Book Content Area */}
      <ScrollView contentContainerStyle={styles.content}>
         <Text style={styles.chapterTitle}>Chapter 3: Setting The Course</Text>
         <Text style={styles.paragraph}>
            Vision is the unfolding of a divine plan as it relates to an individual. It is not just about what you want to do, but what you are designed to accomplish. In the context of our faith, vision is a discovery of purpose.
         </Text>
         <Text style={styles.paragraph}>
            Many young people struggle because they are seeking after the temporary validations of the world rather than the enduring purpose established for them. When you understand your vision, your decisions become easier. You no longer have to guess what path to take.
         </Text>
         <Text style={styles.paragraph}>
            "Where there is no vision, the people perish..." This ancient wisdom remains true today. Perishing doesn't always mean a physical end; it can mean living below your potential, wandering without direction, or being swayed by every passing trend.
         </Text>
         <Text style={styles.paragraph}>
            To set the course for your life, you must first spend time in reflection and prayer. Seek clarity before you seek speed. It is better to move slowly in the right direction than to run fast in the wrong one.
         </Text>
         {/* More mock paragraphs for scrolling */}
         <Text style={styles.paragraph}>
            Once the vision is clear, the next step is provision. God will not fund a vision He did not give. Therefore, align yourself...
         </Text>
      </ScrollView>

      {/* Footer Overlay */}
      <View style={styles.footer}>
         <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="list" size={24} color={Colors.text} />
         </TouchableOpacity>
         <Text style={styles.pageIndicator}>Page 42 of 150</Text>
         <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={24} color={Colors.text} />
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6', // Off-white "paper" look
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: '#F9F8F6',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  iconButton: {
    padding: Spacing.sm,
  },
  headerMeta: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
  },
  headerTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 14,
    color: Colors.text,
  },
  headerSubtitle: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: Colors.textLight,
  },
  content: {
    padding: Spacing.xl,
    paddingBottom: Spacing.xxl * 2,
  },
  chapterTitle: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    color: Colors.text,
    marginBottom: Spacing.lg,
    marginTop: Spacing.md,
  },
  paragraph: {
    fontFamily: 'serif', // Books look better with serif optionally, but let's stick to our brand body if we want:
    // fontFamily: Fonts.body,
    fontSize: 18,
    lineHeight: 28,
    color: '#333333',
    marginBottom: Spacing.lg,
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: '#F9F8F6',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  pageIndicator: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.textLight,
  },
});
