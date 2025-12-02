import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Role } from '../../shared/userInterface/role.models';

interface AppUser {
  name: string;
  role: Role;
  active: boolean;
}

interface Task {
  name: string;
  completed: boolean;
  overdue: boolean;
  dueDate: Date;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
  cost: number;
}

@Component({
  selector: 'app-day3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day3.html',
  styleUrl: './day3.css',
})
export class Day3 {
  Role = Role;

  users: AppUser[] = [
    { name: 'Mohammed', role: Role.Admin, active: true },
    { name: 'Ali', role: Role.User, active: true },
    { name: 'Omar', role: Role.User, active: false },
    { name: 'Sara', role: Role.Guest, active: true },
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
    return this.users.filter((u) => u.role === this.selectedRoleFilter);
  }

  tasks: Task[] = [
    {
      name: 'Prepare Angular Day 3 slides',
      completed: true,
      overdue: false,
      dueDate: new Date('2025-12-01'),
      priority: 'High',
      description: 'Update examples for ngClass, ngStyle, and ngIf.',
      cost: 0,
    },
    {
      name: 'Review student projects',
      completed: false,
      overdue: false,
      dueDate: new Date('2025-12-05'),
      priority: 'Medium',
      description: 'Check submitted exercises and give feedback.',
      cost: 15,
    },
    {
      name: 'Pay cloud hosting bill',
      completed: false,
      overdue: true,
      dueDate: new Date('2025-11-25'),
      priority: 'High',
      description: 'Renew server subscription before shutdown.',
      cost: 25,
    },
    {
      name: 'Refactor user service',
      completed: false,
      overdue: false,
      dueDate: new Date('2025-12-10'),
      priority: 'Low',
      description: 'Clean up TypeScript types and interfaces.',
      cost: 0,
    },
  ];

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
