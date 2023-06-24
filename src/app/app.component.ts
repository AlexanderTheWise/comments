import { Component } from '@angular/core';
import { Comments } from './types';
import { CommentsService } from './services/comments.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.app { padding: 64px 16px;} .comment-size {max-width: 730px}'],
})
export class AppComponent {
  comments: Comments;

  constructor(commentService: CommentsService) {
    this.comments = commentService.comments;
  }
}
