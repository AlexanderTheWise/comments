import { Comments, User, VotedState } from './app/types';

export const currentUser: User = {
  image: {
    png: 'assets/images/avatars/image-juliusomo.png',
    webp: 'assets/images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

export const comments: Comments = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: new Date().toISOString(),
    score: 12,
    user: {
      image: {
        png: 'assets/images/avatars/image-amyrobson.png',
        webp: 'assets/images/avatars/image-amyrobson.webp',
      },
      username: 'amyrobson',
    },
    voted: VotedState.Unvoted,
    replies: [],
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: new Date().toISOString(),
    score: 5,
    user: {
      image: {
        png: 'assets/images/avatars/image-maxblagun.png',
        webp: 'assets/images/avatars/image-maxblagun.webp',
      },
      username: 'maxblagun',
    },
    voted: VotedState.Unvoted,
    replies: [
      {
        id: 3,
        replyingTo: 'maxblagun',
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: new Date().toISOString(),
        score: 4,
        user: {
          image: {
            png: 'assets/images/avatars/image-ramsesmiron.png',
            webp: 'assets/images/avatars/image-ramsesmiron.webp',
          },
          username: 'ramsesmiron',
        },
        voted: VotedState.Unvoted,
        replies: [],
      },
      {
        id: 4,
        replyingTo: 'maxblagun',
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: new Date().toISOString(),
        score: 2,
        user: {
          image: {
            png: 'assets/images/avatars/image-juliusomo.png',
            webp: 'assets/images/avatars/image-juliusomo.webp',
          },
          username: 'juliusomo',
        },
        voted: VotedState.Unvoted,
        replies: [],
      },
    ],
  },
];
