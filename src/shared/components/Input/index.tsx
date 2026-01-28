import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

import { inputVariants } from "./input.variants";

export const Input = () => {
  const styles = inputVariants({});

  return (
    <View>
      <Pressable>
        <Ionicons name="person" />
        <TextInput />
        <TouchableOpacity>
          <Ionicons name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};