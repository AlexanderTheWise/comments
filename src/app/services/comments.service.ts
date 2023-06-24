import { Injectable } from '@angular/core';
import { Comment, Comments } from '../types';
import { currentUser, comments } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  currentUser = currentUser;
  storageName = 'comments';
  comments: Comments;

  constructor() {
    this.comments =
      JSON.parse(localStorage.getItem(this.storageName)!) || comments;
  }

  deleteComment(parentComment: Comment, id: number) {
    if (parentComment) {
      parentComment.replies = parentComment.replies.filter(
        (reply) => reply.id !== id
      );

      this.updateStorage();
      return;
    }

    this.comments.splice(
      this.comments.findIndex((comment) => comment.id === id),
      1
    );

    this.updateStorage();
  }

  addComment(parentComment: Comment, comment: Comment) {
    if (parentComment) {
      parentComment.replies.unshift(comment);

      this.updateStorage();
      return;
    }

    this.comments.push(comment);
    this.updateStorage();
  }

  updateContent(comment: Comment, content: string) {
    comment.content = content;
    this.updateStorage();
  }

  increaseScore(comment: Comment) {
    comment.score++;
    this.updateStorage();
  }

  decreaseScore(comment: Comment) {
    comment.score--;
    this.updateStorage();
  }

  private updateStorage() {
    debugger;
    localStorage.setItem(this.storageName, JSON.stringify(this.comments));
  }
}
