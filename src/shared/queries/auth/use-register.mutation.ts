import { useMutation } from "@tanstack/react-query";

import * as authService from "../../services/auths.service";
import { RegisterHttpParams, RegisterHttpResponse } from "../../interfaces/http/register";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => authService.register(userData),
    onSuccess: (response: RegisterHttpResponse) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  return mutation;
} 