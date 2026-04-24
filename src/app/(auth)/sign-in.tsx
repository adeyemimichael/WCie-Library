import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts, Spacing, Radii } from '../../theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export default function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // Navigate to tabs directly for now
    router.replace('/(tabs)');
  };

  const handleAdminSignIn = () => {
    router.replace('/(admin)/dashboard');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to access your library</Text>
        </View>

        <View style={styles.form}>
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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={Colors.neutral} />}
            rightIcon={<Ionicons name="eye-outline" size={20} color={Colors.neutral} />}
          />

          <Text style={styles.forgotPassword}>Forgot Password?</Text>

          <Button
            title="Log In as User"
            onPress={handleSignIn}
            style={styles.signInButton}
          />

          <Button
            title="Log In as Admin"
            onPress={handleAdminSignIn}
            variant="outlined"
            style={styles.adminSignInButton}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Text
            style={styles.footerLink}
            onPress={() => router.replace('/(auth)/sign-up')}
          >
            Create Account
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
  forgotPassword: {
    fontFamily: Fonts.bodyMedium,
    color: Colors.primary,
    textAlign: 'right',
    marginTop: -Spacing.sm,
    marginBottom: Spacing.lg,
  },
  signInButton: {
    marginTop: Spacing.sm,
  },
  adminSignInButton: {
    marginTop: Spacing.md,
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
