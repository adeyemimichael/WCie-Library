import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export default function SignUpScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    // Navigate to tabs directly for now
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Secure Registration</Text>
          <Text style={styles.subtitle}>Join the Youth Library today.</Text>
        </View>

        <View style={styles.form}>
          <Input
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            leftIcon={<Ionicons name="person-outline" size={20} color={Colors.neutral} />}
          />

          <Input
            label="Email Address"
            placeholder="name@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={<Ionicons name="mail-outline" size={20} color={Colors.neutral} />}
          />

          <Input
            label="Password"
            placeholder="Min. 8 characters"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={Colors.neutral} />}
            rightIcon={<Ionicons name="eye-outline" size={20} color={Colors.neutral} />}
          />

          <Button
            title="Create Account"
            onPress={handleSignUp}
            style={styles.signUpButton}
          />
          
          <View style={styles.features}>
            <View style={styles.featureItem}>
               <Ionicons name="shield-checkmark" size={16} color={Colors.success} style={styles.featureIcon} />
               <Text style={styles.featureText}>Secure Registration</Text>
            </View>
            <View style={styles.featureItem}>
               <Ionicons name="people" size={16} color={Colors.primary} style={styles.featureIcon} />
               <Text style={styles.featureText}>Youth Oriented</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Text
            style={styles.footerLink}
            onPress={() => router.replace('/(auth)/sign-in')}
          >
            Sign in
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.xl,
    paddingTop: 80,
  },
  header: {
    marginBottom: Spacing.xxl,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.textLight,
  },
  form: {
    marginBottom: Spacing.xxl,
  },
  signUpButton: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  features: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    marginRight: Spacing.sm,
  },
  featureText: {
    fontFamily: Fonts.bodyMedium,
    fontSize: 14,
    color: Colors.textLight,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingBottom: Spacing.xl,
  },
  footerText: {
    fontFamily: Fonts.body,
    color: Colors.textLight,
    fontSize: 14,
  },
  footerLink: {
    fontFamily: Fonts.bodyBold,
    color: Colors.primary,
    fontSize: 14,
  },
});
