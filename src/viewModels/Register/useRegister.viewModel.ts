import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "./register.schema";
import { RegisterSchemaData } from "./register.schema";

export const useRegisterViewModel = () => {
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

  const onSubmit = handleSubmit(({}) => {})

  return {
    control,
    onSubmit,
    errors,
  };
}