export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Alert {
  type: string;
  text: string;
}

export interface Modal {
  show: boolean;
  content: string;
}
