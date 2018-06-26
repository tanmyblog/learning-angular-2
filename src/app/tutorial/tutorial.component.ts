import { Component } from '@angular/core';

@Component ({
    selector: 'my-tutorial',
    template: `
        <h3 [class.redColor]="applyClass">red color</h3>
        <h4 [style.color]="blueColor?'blue':'orange'">Style Color</h4>
    `,
    styles: [`
        .redColor {color: red;}
        .color {color: blue}
    `]
})

export class TutorialComponent {
    public applyClass = true;
    public blueColor = false;
}