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
  modalOpen = false;
  editing = false;
  replyVisible = false;
  currentUser: User;

  constructor(private commentService: CommentsService) {
    this.currentUser = commentService.currentUser;
  }

  ngOnInit(): void {
    this.contentEditable = `@${this.comment.replyingTo}, ${this.comment.content}`;
  }

  get isYours() {
    return this.currentUser.username === this.comment.user.username;
  }

  deleteComment() {
    this.commentService.deleteComment(this.parentComment, this.comment.id);
  }

  updateContent() {
    const contentWithoutUser = this.contentEditable.replace(
      `@${this.comment.replyingTo},`,
      ''
    );

    this.commentService.updateContent(this.comment, contentWithoutUser);
    this.editing = false;
  }

  openReply() {
    this.replyVisible = true;
  }

  openModal() {
    this.modalOpen = true;
  }

  closeReply() {
    this.replyVisible = false;
  }

  closeModal() {
    this.modalOpen = false;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }
}
