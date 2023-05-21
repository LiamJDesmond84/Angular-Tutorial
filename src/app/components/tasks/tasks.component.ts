import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService){}
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((taskObservs) => this.tasks = taskObservs);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTasks(task).subscribe(() => (this.tasks = this.tasks.filter(x => x.id != task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
  }

}
