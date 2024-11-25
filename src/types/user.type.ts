export interface TUser {
  email: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
