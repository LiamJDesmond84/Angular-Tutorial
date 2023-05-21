import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Task Tracker";
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService){}

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }


  
  addMe(): void {
    console.log("Added")
  }

  deleteMe(): void {
    console.log("Deleted")
  }
}
