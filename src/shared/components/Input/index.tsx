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
  const { getIconColor, handleShowPasswordToggle, handleWrapperFocus, handleFocus, handleBlur, showPassword } = useInputViewModel({
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
  
  const styles = inputVariants();

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons size={22} name="person" />
        <TextInput
          className={styles.input({ className: className })}
          {...textInputProps}
        />
        <TouchableOpacity>
          <Ionicons size={22} name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
