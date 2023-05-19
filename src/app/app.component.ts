import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Tutorial';

  intervalSub;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log("Heyyy from OnInit");
    });
  }
}
