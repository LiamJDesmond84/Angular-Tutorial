import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
  @Input() callBack: (args: any) => void;
  

  addMe(){
    console.log("Add");
  }

  deleteMe(){
    console.log("Add");
  }
}
