import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../theme';
import { Ionicons } from '@expo/vector-icons';

const MOCK_NOTIFICATIONS = [
  { id: '1', title: 'New Sermon Uploaded', desc: 'Watch the latest Sunday service on Vision.', time: '2h ago', read: false },
  { id: '2', title: 'Continue Reading', desc: 'You are 80% done with Understanding Faith.', time: '1d ago', read: true },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color={Colors.text} />
         </TouchableOpacity>
         <Text style={styles.title}>Notifications</Text>
         <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={MOCK_NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, !item.read && styles.unread]}>
             <View style={styles.iconBox}>
                <Ionicons name="notifications" size={24} color={Colors.primary} />
             </View>
             <View style={styles.content}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
             </View>
             {!item.read && <View style={styles.dot} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Spacing.xl, borderBottomWidth: 1, borderBottomColor: Colors.border, backgroundColor: Colors.white },
  title: { fontFamily: Fonts.headingMedium, fontSize: 18, color: Colors.text },
  list: { padding: Spacing.xl },
  card: { flexDirection: 'row', backgroundColor: Colors.white, padding: Spacing.md, borderRadius: Radii.lg, marginBottom: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  unread: { backgroundColor: Colors.lightRed, borderColor: Colors.lightRed },
  iconBox: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(212, 40, 31, 0.1)', justifyContent: 'center', alignItems: 'center', marginRight: Spacing.md },
  content: { flex: 1 },
  itemTitle: { fontFamily: Fonts.headingMedium, fontSize: 16, color: Colors.text },
  itemDesc: { fontFamily: Fonts.body, fontSize: 14, color: Colors.textLight, marginTop: 4 },
  itemTime: { fontFamily: Fonts.bodyMedium, fontSize: 12, color: Colors.textLight, marginTop: 8 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: Colors.primary, alignSelf: 'center', marginLeft: Spacing.sm },
});
