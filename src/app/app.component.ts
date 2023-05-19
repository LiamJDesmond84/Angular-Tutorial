import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Angular-Tutorial';

  intervalSub: string | number | NodeJS.Timer | undefined;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log("Heyyy from OnInit");
    }, 1000);
  }

  ngOnDestroy() {
    if(this.intervalSub){
      console.log("AYYY from OnDestroy");
      clearInterval(this.intervalSub);
    }
  }
}
