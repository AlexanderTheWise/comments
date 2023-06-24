import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment, User, VotedState } from 'src/app/types';

@Component({
  selector: 'reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  @Input() comment: Comment;
  @Output() closeReply = new EventEmitter();
  currentUser: User;
  content: string;

  constructor(private commentService: CommentsService) {
    this.currentUser = this.commentService.currentUser;
  }

  ngOnInit() {
    this.content = this.comment ? `@${this.comment.user.username},` : '';
  }

  onReply() {
    const replyingTo = this.comment?.user.username;

    const newComment: Comment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingTo
        ? this.content.replace(`@${replyingTo},`, '')
        : this.content,
      createdAt: new Date().toISOString(),
      score: 0,
      voted: VotedState.Unvoted,
      replyingTo,
      user: this.currentUser,
      replies: [],
    };

    this.commentService.addComment(this.comment, newComment);

    this.closeReply.emit();
  }
}
