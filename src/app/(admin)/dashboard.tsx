import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

export default function AdminDashboardScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Admin Overview</Text>
          <Text style={styles.subtitle}>Supervising Teens Engagement</Text>
        </View>

        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Ionicons name="people" size={24} color={Colors.white} />
            <Text style={styles.summaryValue}>245</Text>
            <Text style={styles.summaryLabel}>Total Teens</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: Colors.tertiary }]}>
            <Ionicons name="library" size={24} color={Colors.white} />
            <Text style={styles.summaryValue}>84</Text>
            <Text style={styles.summaryLabel}>Resources</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: Colors.success }]}>
            <Ionicons name="book" size={24} color={Colors.white} />
            <Text style={styles.summaryValue}>1.2k</Text>
            <Text style={styles.summaryLabel}>Interactions</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {[1, 2, 3].map((item) => (
             <View key={item} style={styles.activityRow}>
                <View style={styles.activityIcon}>
                   <Ionicons name="time" size={20} color={Colors.primary} />
                </View>
                <View style={styles.activityDetails}>
                   <Text style={styles.activityUser}>John Doe completed</Text>
                   <Text style={styles.activityResource}>"Understanding Faith (Audio)"</Text>
                </View>
                <Text style={styles.activityTime}>2h ago</Text>
             </View>
          ))}
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
  summaryGrid: { flexDirection: 'row', gap: Spacing.md, marginBottom: Spacing.xl, flexWrap: 'wrap' },
  summaryCard: { flex: 1, minWidth: '30%', backgroundColor: Colors.primary, padding: Spacing.lg, borderRadius: Radii.lg, alignItems: 'center' },
  summaryValue: { fontFamily: Fonts.heading, fontSize: 24, color: Colors.white, marginTop: Spacing.sm },
  summaryLabel: { fontFamily: Fonts.bodyMedium, fontSize: 12, color: Colors.white, opacity: 0.8 },
  section: { marginTop: Spacing.lg },
  sectionTitle: { fontFamily: Fonts.headingMedium, fontSize: 18, color: Colors.text, marginBottom: Spacing.md },
  activityRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, padding: Spacing.md, borderRadius: Radii.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.border },
  activityIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.lightRed, justifyContent: 'center', alignItems: 'center', marginRight: Spacing.md },
  activityDetails: { flex: 1 },
  activityUser: { fontFamily: Fonts.bodyMedium, fontSize: 14, color: Colors.text },
  activityResource: { fontFamily: Fonts.bodyBold, fontSize: 14, color: Colors.text },
  activityTime: { fontFamily: Fonts.body, fontSize: 12, color: Colors.textLight },
});
