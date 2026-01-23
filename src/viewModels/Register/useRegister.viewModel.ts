import { useState } from "react";

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: 'Ricardo',
  });

  return {
    userData,
    setUserData,
  };
}