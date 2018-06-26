import { Component } from '@angular/core';

@Component ({
    selector: 'my-tutorial',
    template: `
        <h3>{{title}}</h3>
        <button (click)="OnClick(name.value)">Click Me</button>
        <input type="text" #name />
    `,
    styles: [`
        
    `]
})

export class TutorialComponent {
    public title = 'Hello world';

    OnClick (value) {
        console.log(value);
    }
}