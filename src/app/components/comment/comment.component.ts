import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Comment } from 'src/app/types';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentComponent {
  @Input() comment: Comment;
}
