import { create } from "zustand";

import { IUser } from "../interfaces/user";

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

export const useUserStore = create<IUserStore>()((set) => ({
  user: null,
  token: null,
  refreshToken: null,

  logout: () => {},
  setSession: (sessionData) => set({ ...sessionData }),
  updateTokens: (updateTokensData) => set({ ...updateTokensData }),
}));