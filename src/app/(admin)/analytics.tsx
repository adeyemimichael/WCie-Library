import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

export default function AdminAnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Analytics</Text>
          <Text style={styles.subtitle}>Engagement Reports</Text>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Content Consumption Trends</Text>
          <View style={styles.chartPlaceholder}>
             <Ionicons name="stats-chart" size={64} color={Colors.primary} style={{ opacity: 0.5 }} />
             <Text style={styles.chartSubtext}>Weekly Data (Graph)</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Breakdown by Category</Text>
        <View style={styles.barItem}>
           <View style={styles.barLabelRow}>
              <Text style={styles.barLabel}>Sermons</Text>
              <Text style={styles.barValue}>45%</Text>
           </View>
           <View style={styles.barBg}>
              <View style={[styles.barFill, { width: '45%' }]} />
           </View>
        </View>

        <View style={styles.barItem}>
           <View style={styles.barLabelRow}>
              <Text style={styles.barLabel}>Life Skills</Text>
              <Text style={styles.barValue}>30%</Text>
           </View>
           <View style={styles.barBg}>
              <View style={[styles.barFill, { width: '30%', backgroundColor: Colors.tertiary }]} />
           </View>
        </View>

        <View style={styles.barItem}>
           <View style={styles.barLabelRow}>
              <Text style={styles.barLabel}>Devotionals</Text>
              <Text style={styles.barValue}>25%</Text>
           </View>
           <View style={styles.barBg}>
              <View style={[styles.barFill, { width: '25%', backgroundColor: Colors.success }]} />
           </View>
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
  subtitle: { fontFamily: Fonts.body, fontSize: 16, color: Colors.textLight },
  chartCard: { backgroundColor: Colors.white, padding: Spacing.lg, borderRadius: Radii.lg, marginBottom: Spacing.xxl, shadowColor: Colors.secondary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  chartTitle: { fontFamily: Fonts.headingMedium, fontSize: 16, color: Colors.text, marginBottom: Spacing.md },
  chartPlaceholder: { height: 150, backgroundColor: Colors.lightRed, borderRadius: Radii.md, justifyContent: 'center', alignItems: 'center' },
  chartSubtext: { fontFamily: Fonts.body, color: Colors.primary, marginTop: Spacing.sm },
  sectionTitle: { fontFamily: Fonts.headingMedium, fontSize: 18, color: Colors.text, marginBottom: Spacing.lg },
  barItem: { marginBottom: Spacing.lg },
  barLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Spacing.xs },
  barLabel: { fontFamily: Fonts.bodyMedium, color: Colors.text },
  barValue: { fontFamily: Fonts.bodyBold, color: Colors.textLight },
  barBg: { height: 8, backgroundColor: Colors.border, borderRadius: Radii.full },
  barFill: { height: '100%', backgroundColor: Colors.primary, borderRadius: Radii.full },
});
