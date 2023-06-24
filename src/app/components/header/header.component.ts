import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/types';
import getPostedTime from 'src/app/utils/getPostedTime';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() comment: Comment;
  @Input() isYours: boolean;

  get postedTime() {
    return getPostedTime(this.comment.createdAt);
  }
}
