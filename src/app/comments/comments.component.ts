import { Component, Input } from '@angular/core';
import { Comments } from '../types';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styles: ['.comments {max-width: 763px}'],
})
export class CommentsComponent {
  @Input() comments: Comments;
}
