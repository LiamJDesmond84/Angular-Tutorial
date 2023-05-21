import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = "https://localhost:5000/tasks"

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {

    const tasks = of(TASKS);
    return tasks;
  }
}
