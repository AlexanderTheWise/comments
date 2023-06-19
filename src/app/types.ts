interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Comments;
}

export interface CommentsState {
  currentUser: User;
  comments: Comments;
}

export type Comments = Comment[];
