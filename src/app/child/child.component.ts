import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childMessage: string;

  @Output() messageEventVar = new EventEmitter<string>

  sendMessage(){
    this.messageEventVar.emit("YOYOYOYO from child messageEvent Output")
  }

  constructor(){}

}
