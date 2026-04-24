import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Button } from '../../components/Button';

export default function ResourceDetailScreen() {
  const { id } = useLocalSearchParams();
  
  // Mock data, normally fetch via ID
  const isVideo = parseInt(id as string) % 2 === 0;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
           <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
           <Ionicons name="bookmark-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cover Placeholder */}
        <View style={styles.coverPlaceholder}>
           <Ionicons name={isVideo ? 'videocam' : 'book'} size={80} color={Colors.white} />
        </View>

        <View style={styles.metadataContainer}>
           <View style={styles.tag}>
             <Text style={styles.tagText}>{isVideo ? 'Video' : 'eBook'}</Text>
           </View>
           <Text style={styles.title}>The Power of Vision & Faith</Text>
           <Text style={styles.author}>By David O. Oyedepo</Text>
           
           <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                 <Ionicons name="time-outline" size={16} color={Colors.textLight} />
                 <Text style={styles.infoText}>45 mins</Text>
              </View>
              <View style={styles.infoItem}>
                 <Ionicons name="star" size={16} color={'#F59E0B'} />
                 <Text style={styles.infoText}>4.8 (120 reviews)</Text>
              </View>
           </View>

           <Text style={styles.sectionHeader}>Description</Text>
           <Text style={styles.description}>
             This resource dives deep into understanding the foundational principles of vision.
             It will equip you with the knowledge to navigate life's challenges using faith-based strategies.
             Perfect for teenagers seeking direction and clarity.
           </Text>
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions */}
      <View style={styles.bottomBar}>
         <Button 
           title={isVideo ? 'Watch Now' : 'Read Now'} 
           style={styles.mainButton}
           icon={<Ionicons name="play" size={20} color={Colors.white} />}
           onPress={() => router.push(isVideo ? `/player/${id}` : `/reader/${id}`)}
         />
      </View>
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
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  backButton: {
    padding: Spacing.sm,
    marginLeft: -Spacing.sm,
  },
  actionButton: {
    padding: Spacing.sm,
    marginRight: -Spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxl * 3,
  },
  coverPlaceholder: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: Colors.primary,
    borderRadius: Radii.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  metadataContainer: {
    alignItems: 'flex-start',
  },
  tag: {
    backgroundColor: Colors.lightRed,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: Radii.sm,
    marginBottom: Spacing.md,
  },
  tagText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 12,
    color: Colors.primary,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  author: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 16,
    color: Colors.textLight,
    marginBottom: Spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textLight,
  },
  sectionHeader: {
    fontFamily: Fonts.headingMedium,
    fontSize: 18,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  description: {
    fontFamily: Fonts.body,
    fontSize: 15,
    color: Colors.textLight,
    lineHeight: 24,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.xl,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  mainButton: {
    width: '100%',
  },
});
