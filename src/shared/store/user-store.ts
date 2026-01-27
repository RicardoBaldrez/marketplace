import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUser } from '../interfaces/user';

interface ISetSessionParams {
  user: IUser;
  token: string;
  refreshToken: string;
}

interface IUpdateTokensParams {
  token: string;
  refreshToken: string;
}

export interface IUserStore {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;
  setSession: (sessionData: ISetSessionParams) => void;
  logout: () => void;
  updateTokens: (updateTokensData: IUpdateTokensParams) => void;
}

export const useUserStore = create<IUserStore>()(
  persist((set) => ({
    user: null,
    token: null,
    refreshToken: null,

    logout: () => set({
      user: null,
      token: null,
      refreshToken: null
    }),
    setSession: (sessionData) => set({ ...sessionData }),
    updateTokens: (updateTokensData) => set({ ...updateTokensData }),
  }), {
    name: 'marketplace-auth',
    storage: createJSONStorage(() => AsyncStorage),
  })
);
