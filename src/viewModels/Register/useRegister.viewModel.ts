import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "./register.schema";
import { RegisterSchemaData } from "./register.schema";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";

export const useRegisterViewModel = () => {
const { setSession } = useUserStore();
  
  const userRegisterMutation = useRegisterMutation();

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterSchemaData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    const mutationReponse = await userRegisterMutation.mutateAsync(registerData);

    setSession({
      user: mutationReponse.user,
      token: mutationReponse.token,
      refreshToken: mutationReponse.refreshToken,
    })
  });

  return {
    control,
    onSubmit,
    errors,
  };
}