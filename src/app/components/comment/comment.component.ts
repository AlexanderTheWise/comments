import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment, User } from 'src/app/types';
import getPostedTime from 'src/app/utils/getPostedTime';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentComponent implements OnInit {
  @Input() parentComment: Comment;
  @Input() comment: Comment;
  contentEditable: string;
  editing = false;
  replyVisible = false;
  currentUser: User;

  constructor(private commentService: CommentsService) {
    this.currentUser = commentService.currentUser;
  }

  ngOnInit(): void {
    this.contentEditable = `@${this.comment.replyingTo}, ${this.comment.content}`;
  }

  get postedTime() {
    return getPostedTime(this.comment.createdAt);
  }

  get isYours() {
    return this.currentUser.username === this.comment.user.username;
  }

  deleteComment() {
    this.commentService.deleteComment(this.parentComment, this.comment.id);
  }

  updateComment() {
    const contentWithoutUser = this.contentEditable.replace(
      `@${this.comment.replyingTo},`,
      ''
    );

    this.commentService.updateComment(this.comment, contentWithoutUser);
    this.editing = false;
  }

  openReply() {
    this.replyVisible = true;
  }

  closeReply() {
    this.replyVisible = false;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }
}
