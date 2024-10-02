import { Task } from '../features/doctors/models/task.model';

export const mockTasks: Task[] = [
  { id: 1, userId: 1, title: 'Task 1', completed: false },
  { id: 2, userId: 1, title: 'Task 2', completed: true },
];
