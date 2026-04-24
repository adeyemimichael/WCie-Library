import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Progress</Text>
        </View>

        <View style={styles.overviewCard}>
           <Text style={styles.overviewTitle}>Overall Engagement</Text>
           <Text style={styles.overviewDescription}>You are doing great! Keep up the consistency.</Text>
           <View style={styles.chartPlaceholder}>
             <Ionicons name="pie-chart" size={80} color={Colors.white} style={{ opacity: 0.8 }} />
           </View>
        </View>

        <View style={styles.statsGrid}>
           <View style={styles.statBox}>
              <Ionicons name="book" size={24} color={Colors.primary} />
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Books Read</Text>
           </View>
           <View style={styles.statBox}>
              <Ionicons name="headset" size={24} color={Colors.primary} />
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Audio Finished</Text>
           </View>
           <View style={styles.statBox}>
              <Ionicons name="videocam" size={24} color={Colors.primary} />
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Videos Watched</Text>
           </View>
           <View style={styles.statBox}>
              <Ionicons name="flame" size={24} color={Colors.error} />
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
           </View>
        </View>

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
  overviewCard: {
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    borderRadius: Radii.lg,
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  overviewTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 20,
    color: Colors.white,
    marginBottom: Spacing.xs,
  },
  overviewDescription: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.lightRed,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  chartPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'space-between',
  },
  statBox: {
    width: '47%',
    backgroundColor: Colors.white,
    padding: Spacing.lg,
    borderRadius: Radii.lg,
    alignItems: 'center',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.text,
    marginTop: Spacing.sm,
  },
  statLabel: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.textLight,
    marginTop: Spacing.xs,
  },
});
