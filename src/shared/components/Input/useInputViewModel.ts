import { useRef, useState } from "react"
import { BlurEvent, FocusEvent, TextInput } from "react-native";

import { colors } from "../../../styles/colors";

interface IInputViewModel {
  isError?: boolean;
  isDisabled?: boolean;
  error?: string;
  secureTextEntry?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
  value?: string;
}

export const useInputViewModel = ({
  isError,
  isDisabled,
  error,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: IInputViewModel) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleShowPasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleWrapperFocus = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const getIconColor = () => {
    if (isError) return colors.danger;
    if (value) return colors["purple-base"];
    if (isFocused) return colors["purple-base"];
    return colors.gray[200];
  };

  const handleChangeText = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || "");
    } else {
      onChangeText?.(text);
    }
  }

  return {
    getIconColor,
    handleShowPasswordToggle,
    handleWrapperFocus,
    handleFocus,
    handleBlur,
    handleChangeText,
    showPassword,
    isFocused
  }
}