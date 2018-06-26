import { Component } from '@angular/core';

@Component ({
    selector: 'my-tutorial',
    template: `<h2>this is tutorial component</h2> <img [src]="img">`,
    styles: [`h2{color: red;}`]
})

export class TutorialComponent {
    public img = "http://lorempixel.com/300/300";
}