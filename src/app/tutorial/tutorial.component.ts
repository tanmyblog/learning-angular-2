import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent {
    onSubmit(value: any) {
        console.log(value);
    }

    public cities = [{ Id: 1, Name: 'HCM' }, { Id: 2, Name: 'HaNoi' }];
}