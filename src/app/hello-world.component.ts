import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    // template: '<h1>{{title}} - {{otherThing}}</h1>',
    styles: [`
    h1 {
        color: red;
    }`]
})

export class HelloWorldComponent {
    title = "Hello SUCKA!";
    otherThing = "Something else";

}