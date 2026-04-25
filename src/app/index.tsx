import { View, Text, StyleSheet, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { Colors, Fonts, Spacing, Radii } from '../theme';
import { Button } from '../components/Button';

export default function WelcomeScreen() {
 
  return (
    <View style={styles.container}>
      {/* Top Graphic Placeholder */}
      <View style={styles.topSection}>
        <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>WCIE</Text>
            <Text style={styles.logoSubtext}>Teens Church Library</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Welcome to the{'\n'}Youth Library</Text>
        <Text style={styles.subtitle}>
          Explore a centralized, structured, and engaging digital platform of faith-based resources tailored for you.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Create Account"
            onPress={() => router.push('/(auth)/sign-up')}
            style={styles.button}
          />
          <Button
            title="Log In"
            variant="secondary"
            onPress={() => router.push('/(auth)/sign-in')}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topSection: {
    flex: 5,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  logoPlaceholder: {
    padding: Spacing.xl,
    backgroundColor: Colors.white,
    borderRadius: Radii.lg,
    alignItems: 'center',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  logoText: {
    fontFamily: Fonts.heading,
    color: Colors.primary,
    fontSize: 40,
  },
  logoSubtext: {
    fontFamily: Fonts.bodyMedium,
    color: Colors.text,
    fontSize: 14,
    marginTop: Spacing.sm,
  },
  bottomSection: {
    flex: 6,
    padding: Spacing.xl,
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 32,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.textLight,
    lineHeight: 24,
    marginBottom: Spacing.xxl,
  },
  buttonContainer: {
    gap: Spacing.md,
  },
  button: {
    width: '100%',
  },
});
