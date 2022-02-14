export interface User {
  userID: string;
  username: string;
  email: string;
  passwordHash: string;
  registeredAt: Date;
  lastLogin: Date;
}
