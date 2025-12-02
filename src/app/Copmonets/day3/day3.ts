import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Role = 'Admin' | 'User' | 'Guest';

interface AppUser {
  name: string;
  role: Role;
  active: boolean;
}

@Component({
  selector: 'app-day3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day3.html',
  styleUrl: './day3.css',
})
export class Day3 {
  users: AppUser[] = [
    { name: 'Mohammed', role: 'Admin', active: true },
    { name: 'Ali',       role: 'User',  active: true },
    { name: 'Omar',      role: 'User',  active: false },
    { name: 'Sara',      role: 'Guest', active: true },
  ];

  selectedRoleFilter: Role | 'All' = 'All';

  setFilter(role: Role | 'All') {
    this.selectedRoleFilter = role;
  }

  toggleActive(user: AppUser) {
    user.active = !user.active;
  }

  get filteredUsers(): AppUser[] {
    if (this.selectedRoleFilter === 'All') return this.users;
    return this.users.filter(u => u.role === this.selectedRoleFilter);
  }
}
