import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {





  getMin(a, b){
    if(a < b){
      return a
    }
    else{
      return b
    }
  }


    // intervalSub;

  // ngOnInit() {
  //   this.intervalSub = setInterval(() => {
  //     console.log("Heyyy from OnInit");
  //   }, 1000);
  // }

  // ngOnDestroy() {
  //   if(this.intervalSub){

  //     clearInterval(this.intervalSub);
  //   }
  // }
}
