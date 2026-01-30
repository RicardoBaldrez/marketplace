import { FC } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { inputVariants, InputVariants } from './input.variants';

import { useInputViewModel } from './useInputViewModel';

interface InputProps extends TextInputProps, InputVariants {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  className,
  value,
  isError,
  secureTextEntry = false,
  onFocus,
  onBlur,
  onChangeText,
  mask,
  error,
  isDisabled,
  containerClassName,

  ...textInputProps
}) => {
  const {
    getIconColor,
    handleShowPasswordToggle,
    handleWrapperFocus,
    handleFocus,
    handleBlur,
    handleChangeText,
    showPassword,
    isFocused,
  } = useInputViewModel({
    mask,
    value,
    secureTextEntry,
    isDisabled,
    error,
    isError: !!error,
    onBlur,
    onFocus,
    onChangeText,
  });

  const styles = inputVariants({
    isFocused,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            color={getIconColor()}
            className="mr-3 text-gray-200"
            size={22}
            name={leftIcon}
          />
        )}
        <TextInput
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleChangeText}
          {...textInputProps}
          className={styles.input({ className: className })}
          secureTextEntry={showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={handleShowPasswordToggle}>
            <Ionicons size={22} name={showPassword ? 'eye-outline' : 'eye-off-outline'} />
          </TouchableOpacity>
        )}
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
};
