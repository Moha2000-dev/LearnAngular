export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface Task {
  name: string;           // Task name
  completed: boolean;     // true if task is done
  overdue: boolean;       // true if past deadline
  dueDate: Date;          // deadline
  priority: TaskPriority; // High | Medium | Low
  description: string;    // details
  cost: number;           // cost or budget
}
