import { Component, Input } from '@angular/core';
import { Comments, Comment } from '../../types';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  @Input() parentComment: Comment;
  @Input() comments: Comments;
}
