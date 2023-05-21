import { Component } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private taskService: TaskServiceService){};

  text: string;
  day: string;
  reminder: boolean = false;

  onSubmit(){

    if(!this.text){
      return;
    }
    if(!this.day){
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.taskService.addNewTask(newTask).subscribe();


  }

}
