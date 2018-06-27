import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
        <p>Name: {{name | uppercase}}</p>
        <p>Title: {{title | lowercase }}</p>
        <p>Today: {{today | date:"dd/MM/yyyy" }}</p>
        <p>Percent: {{ percentNumber | percent }}</p>
        <p>Percent: {{ percentNumber | percent }}</p>
        <p>E {{e | number}}</p>
        <p>Object {{object | json}}</p>

        <ul>
            <li *ngFor="let i of collection | slice:1:3" >{{i}}</li>
        </ul>

        <p>2 power 10 = {{2 | exponentialStrength:10 }}</p>
    `,
    styles: [``]
})

export class TutorialComponent {
    public name = "Hello World";
    public title = "Huong Dan hoc Angular 6";
    public today = Date.now();
    public percentNumber = 1.3456;
    public e:number = 2.435586877862423;
    public object : object = {'foo':'bar', 'baz':'abc'};
    public collection : string[] = ['a','b','c','d'];
}