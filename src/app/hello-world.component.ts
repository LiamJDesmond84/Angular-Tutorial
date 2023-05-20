import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    // template: '<h1>{{title}} - {{otherThing}}</h1>',
    templateUrl: './hello-world.component.html',
    styles: [`
    h1 {
        color: red;
    }`]
})

export class HelloWorldComponent {
    title = "Hello SUCKA!";
    otherThing = "Something else";

}