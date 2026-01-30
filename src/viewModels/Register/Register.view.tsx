import { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useRegisterViewModel } from './useRegister.viewModel';
import { Input } from '../../shared/components/Input';

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 justify-center">
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        leftIcon="mail-outline"
      />
      <Input label="Senha" leftIcon="lock-closed-outline" />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
