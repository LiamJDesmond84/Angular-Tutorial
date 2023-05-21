import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Task Tracker";

  constructor(private uiService: UiService){}

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }


  
  addMe(){
    console.log("Added")
  }

  deleteMe(){
    console.log("Deleted")
  }
}
