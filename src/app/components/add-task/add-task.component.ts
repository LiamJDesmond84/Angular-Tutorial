import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private taskService: TaskServiceService, private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  @Output() submitTask: EventEmitter<Task> = new EventEmitter();



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

    // Moved to main task-component, newTask = $event argument
    // this.taskService.addNewTask(newTask).subscribe();

    this.submitTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
