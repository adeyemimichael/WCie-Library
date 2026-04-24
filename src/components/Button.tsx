import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { Colors, Fonts, Radii, Spacing } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  loading = false,
  icon,
}: ButtonProps) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutlined = variant === 'outlined';
  const isGhost = variant === 'ghost';

  const getBackgroundColor = () => {
    if (disabled) return Colors.neutral;
    if (isPrimary) return Colors.primary;
    if (isSecondary) return Colors.secondary;
    if (isOutlined || isGhost) return 'transparent';
    return Colors.primary;
  };

  const getTextColor = () => {
    if (disabled && !isOutlined && !isGhost) return Colors.white;
    if (isPrimary || isSecondary) return Colors.white;
    if (isOutlined) return Colors.primary;
    if (isGhost) return Colors.text;
    return Colors.white;
  };

  const getBorderColor = () => {
    if (disabled) return Colors.neutral;
    if (isOutlined) return Colors.primary;
    return 'transparent';
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: isOutlined ? 1 : 0,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon && <React.Fragment>{icon}</React.Fragment>}
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radii.full,
    gap: Spacing.sm,
  },
  text: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    textAlign: 'center',
  },
});
