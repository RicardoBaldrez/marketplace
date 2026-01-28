import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { Input } from "../../shared/components/Input";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({ onSubmit }) => {
  return (
    <View className="flex-1 justify-center">
      <Input />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
} 