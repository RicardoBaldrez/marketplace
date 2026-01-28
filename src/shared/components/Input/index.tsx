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

interface InputProps extends TextInputProps, InputVariants {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
}

export const Input: FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  ...textInputProps
}) => {
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
