import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(private httpReq:HttpClient) {}

  getTasks(): Observable<Task[]> {

    return this.httpReq.get<Task[]>(this.apiUrl);
  }

  deleteTasks(task: Task): Observable<Task> {
    // const singleTaskUrl = `${this.apiUrl}/${task.id}`

    return this.httpReq.delete<Task>(this.apiUrl + "/" + task.id);
  }
}
