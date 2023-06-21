export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  user: User;
  replies: Comments;
  replyingTo?: string;
}

export interface CommentsState {
  comments: Comments;
}

export type Comments = Comment[];
