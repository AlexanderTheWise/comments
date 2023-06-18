import { Component } from '@angular/core';
import { Comments } from './types';
import commentState from 'src/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.app { display: flex; flex-direction: row; justify-content: center;padding: 0 16px;}',
  ],
})
export class AppComponent {
  comments: Comments;

  constructor() {
    this.comments = commentState.comments;
  }
}
