import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    templateUrl: 'tutorial.component.html',
    styles: [``]
})

export class TutorialComponent {
    onSubmit(value:any){
        console.log(value);
    }
}