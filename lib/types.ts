type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

type Views = {
  slug: string;
  count: number;
};

type Contact = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
  id: string;
};

type Post = {
  _id: string;
  slug: string;
  title: string;
  likes: number;
  description: string;
  date: string;
  body: any;
  createdAt: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export type { NowPlayingSong, Views, Contact, Post };
