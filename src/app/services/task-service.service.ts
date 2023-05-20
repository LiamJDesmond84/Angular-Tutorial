import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
