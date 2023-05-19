import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: '',
    styles: [`
    h1 {
        color: blue;
    }`]
})

export class HelloWorldComponent {
    title = "Hello";

}