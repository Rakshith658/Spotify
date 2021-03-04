export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type Home = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type Search = {
  SearchScreen: undefined;
};

export type Library = {
  LibraryScreen: undefined;
};

export type Premium = {
  PremiumScreen: undefined;
};

export type Album = {
  id:string;
  imageUri:string;
  artistsHeadline:string;
  name: string;
  by: string;
  numberOfLikes: number;
};
export type Song = {
  id:string;
  imageUri:string;
  title:string;
  artist:string;
};
