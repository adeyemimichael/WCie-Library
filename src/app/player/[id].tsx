import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

const { width } = Dimensions.get('window');

export default function MediaPlayerScreen() {
  const { id } = useLocalSearchParams();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
           <Ionicons name="chevron-down" size={28} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <TouchableOpacity style={styles.iconButton}>
           <Ionicons name="ellipsis-horizontal" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
         {/* Video/Audio Cover Placeholder */}
         <View style={styles.mediaPlaceholder}>
            <Ionicons name="musical-notes" size={80} color={Colors.white} style={{ opacity: 0.5 }} />
         </View>

         <View style={styles.metadata}>
            <Text style={styles.title}>The Power of Vision & Faith</Text>
            <Text style={styles.author}>David O. Oyedepo</Text>
         </View>

         {/* Seek Bar */}
         <View style={styles.progressContainer}>
            <View style={styles.progressBarBg}>
               <View style={styles.progressBarFill} />
               <View style={styles.progressThumb} />
            </View>
            <View style={styles.timeRow}>
               <Text style={styles.timeText}>12:34</Text>
               <Text style={styles.timeText}>45:00</Text>
            </View>
         </View>

         {/* Controls */}
         <View style={styles.controlsRow}>
            <TouchableOpacity style={styles.controlButton}>
               <Ionicons name="play-skip-back" size={32} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
               <Ionicons name="play-back" size={28} color={Colors.white} />
               <Text style={styles.skipText}>15</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
               style={styles.playPauseButton}
               onPress={() => setIsPlaying(!isPlaying)}
            >
               <Ionicons name={isPlaying ? "pause" : "play"} size={40} color={Colors.primary} style={{ marginLeft: isPlaying ? 0 : 4 }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>
               <Ionicons name="play-forward" size={28} color={Colors.white} />
               <Text style={styles.skipText}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
               <Ionicons name="play-skip-forward" size={32} color={Colors.white} />
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary, // Dark background for media player
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  iconButton: {
    padding: Spacing.sm,
  },
  headerTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 14,
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxl,
    justifyContent: 'space-between',
  },
  mediaPlaceholder: {
    width: width - Spacing.xl * 2,
    aspectRatio: 1,
    backgroundColor: '#332D2A',
    borderRadius: Radii.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  metadata: {
    marginTop: Spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  author: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 16,
    color: Colors.textLight,
  },
  progressContainer: {
    marginTop: Spacing.xxl,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: Radii.full,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarFill: {
    height: '100%',
    width: '30%',
    backgroundColor: Colors.primary,
    borderRadius: Radii.full,
  },
  progressThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
    marginLeft: -8,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.sm,
  },
  timeText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 12,
    color: Colors.textLight,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.lg,
    marginTop: Spacing.xl,
  },
  controlButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    position: 'absolute',
    fontFamily: Fonts.bodyBold,
    fontSize: 9,
    color: Colors.white,
    top: 9,
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
