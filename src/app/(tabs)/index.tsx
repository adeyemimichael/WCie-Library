import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../../theme';

const RECOMMENDED = [
  { id: '1', title: 'The Power of Vision', author: 'David O. Oyedepo', type: 'audio', progress: 0.4 },
  { id: '2', title: 'Understanding Faith', author: 'David O. Oyedepo', type: 'book', progress: 0.1 },
];

const ASSIGNMENTS = [
  { id: '1', title: 'Read Chapter 1 & 2', resource: 'Winning in Life', due: 'Tomorrow', completed: false },
  { id: '2', title: 'Listen to Sermon', resource: 'Youth Arise Conf.', due: 'In 3 days', completed: true },
];

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Ayobami 👋</Text>
            <Text style={styles.subGreeting}>Ready to learn today?</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity onPress={() => router.push('/notifications')} style={styles.iconButton}>
               <Ionicons name="notifications-outline" size={24} color={Colors.text} />
               {/* Notification dot */}
               <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileIconPlaceholder} onPress={() => router.push('/profile')}>
               <Ionicons name="person" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Stats/Progress Card */}
        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <Text style={styles.statsTitle}>Your Weekly Goal</Text>
            <Text style={styles.statsSubtitle}>3/5 Resources Completed</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '60%' }]} />
          </View>
        </View>

        {/* Assignments Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Assignments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.assignmentsRow}>
            {ASSIGNMENTS.map((task) => (
              <View key={task.id} style={[styles.assignmentCard, task.completed && styles.assignmentCompleted]}>
                 <View style={styles.assignmentTopRow}>
                    <Ionicons name={task.completed ? "checkmark-circle" : "ellipse-outline"} size={24} color={task.completed ? Colors.success : Colors.primary} />
                    <Text style={styles.dueText}>Due: {task.due}</Text>
                 </View>
                 <Text style={styles.assignmentTitle}>{task.title}</Text>
                 <Text style={styles.assignmentResource}>{task.resource}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesRow}>
            {['Bible Study', 'Life Skills', 'Devotionals', 'Sermons'].map((cat, i) => (
              <TouchableOpacity key={cat} style={[styles.categoryPill, i === 0 && styles.categoryPillActive]}>
                <Text style={[styles.categoryText, i === 0 && styles.categoryTextActive]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Continue Reading / Listening */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          {RECOMMENDED.map((item) => (
            <TouchableOpacity key={item.id} style={styles.resourceCard}>
              <View style={styles.resourceIconWrapper}>
                 <Ionicons name={item.type === 'audio' ? 'headset' : 'book'} size={24} color={Colors.primary} />
              </View>
              <View style={styles.resourceInfo}>
                <Text style={styles.resourceTitle}>{item.title}</Text>
                <Text style={styles.resourceAuthor}>{item.author}</Text>
                <View style={styles.itemProgressBarBg}>
                   <View style={[styles.itemProgressBarFill, { width: `${item.progress * 100}%` }]} />
                </View>
              </View>
              <Ionicons name="play-circle-outline" size={32} color={Colors.primary} />
            </TouchableOpacity>
          ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  greeting: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    color: Colors.text,
  },
  subGreeting: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconButton: {
    position: 'relative',
    padding: Spacing.xs,
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
    borderWidth: 1,
    borderColor: Colors.background,
  },
  profileIconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsCard: {
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    borderRadius: Radii.lg * 1.5,
    marginBottom: Spacing.xxl,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  statsHeader: {
    marginBottom: Spacing.md,
  },
  statsTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 18,
    color: Colors.white,
  },
  statsSubtitle: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.lightRed,
    marginTop: 4,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: Radii.full,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: Radii.full,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 18,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  seeAll: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.primary,
  },
  assignmentsRow: {
    gap: Spacing.md,
  },
  assignmentCard: {
    backgroundColor: Colors.white,
    padding: Spacing.lg,
    borderRadius: Radii.lg,
    width: 220,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  assignmentCompleted: {
    backgroundColor: '#F3F4F6',
    opacity: 0.8,
  },
  assignmentTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  dueText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 12,
    color: Colors.error,
  },
  assignmentTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    color: Colors.text,
  },
  assignmentResource: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 4,
  },
  categoriesRow: {
    gap: Spacing.sm,
  },
  categoryPill: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radii.full,
  },
  categoryPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.text,
  },
  categoryTextActive: {
    color: Colors.white,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.md,
    borderRadius: Radii.lg,
    marginBottom: Spacing.md,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  resourceIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: Radii.md,
    backgroundColor: Colors.lightRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    color: Colors.text,
  },
  resourceAuthor: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 2,
    marginBottom: Spacing.sm,
  },
  itemProgressBarBg: {
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: Radii.full,
    width: '80%',
  },
  itemProgressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: Radii.full,
  },
});
