import {Genre} from './genre';

export interface Book {
  id: number;
  author: string;
  title: string;
  isbn: string;
  genre: Genre;
}
