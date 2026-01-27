import { IUser } from "../user";

export interface RegisterHttpParams {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
}

export interface RegisterHttpResponse {
  user: IUser;
  token: string;
  refreshToken: string;
}