type Role = 'Admin' | 'User' | 'Guest';

interface AppUser {
  name: string;
  role: Role;
  active: boolean;
}
