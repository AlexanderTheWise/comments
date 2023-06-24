import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment, VotedState } from 'src/app/types';

@Component({
  selector: 'votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VotesComponent {
  @Input() comment: Comment;
  @Input() isYours: boolean;

  constructor(private commentsService: CommentsService) {}

  increaseScore() {
    if (
      this.comment.voted === VotedState.DownVoted ||
      this.comment.voted === VotedState.Unvoted
    ) {
      this.commentsService.increaseScore(this.comment);

      this.comment.voted = VotedState.UpVoted;
    }
  }

  decreaseScore() {
    if (
      this.comment.voted === VotedState.UpVoted ||
      this.comment.voted === VotedState.Unvoted
    ) {
      this.commentsService.decreaseScore(this.comment);

      this.comment.voted = VotedState.DownVoted;
    }
  }
}
