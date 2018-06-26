import { Component } from '@angular/core';

@Component ({
    selector: 'my-tutorial',
    template: `<h2>this is tutorial component</h2>
        <h3>Hello Angular 6</h3>
        <h4>Hello Angular 6</h4>
        <h5>Hello Angular 6</h5>
    `,
    styles: [`
        h2{color: red;} 
        h3 {color: blue;}
        h4 {color: yellow;}
        h5 {color: silver}
    `]
})

export class TutorialComponent {
    
}