import { TutorialComponent } from './tutorial/tutorial.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public agree: number = 0;
  public disgree: number = 0;
  public names = ['Mr A', 'Mr B', 'Mr C'];

  @ViewChild(TutorialComponent)
  private tutorialComponent : TutorialComponent;

  parentVote(agree: boolean) {
    if(agree==true) this.agree++;
    else this.disgree++;
  }

  changeName(){
    this.tutorialComponent.setName('Change name in Parent');
  }
}
