import { Injectable } from '@angular/core';
import { Comment } from '../types';
import { currentUser, comments } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  currentUser = currentUser;
  comments = comments;

  deleteComment(parentComment: Comment, id: number) {
    if (parentComment) {
      parentComment.replies = parentComment.replies.filter(
        (reply) => reply.id !== id
      );

      return;
    }

    this.comments.splice(
      this.comments.findIndex((comment) => comment.id === id),
      1
    );
  }

  addComment(parentComment: Comment, comment: Comment) {
    if (parentComment) {
      parentComment.replies.unshift(comment);

      return;
    }

    this.comments.unshift(comment);
  }

  updateComment(comment: Comment, content: string) {
    comment.content = content;
  }
}
