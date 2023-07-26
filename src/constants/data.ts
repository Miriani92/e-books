import { images } from "../images";
const {
  Duck,
  StarBoy,
  SadEgg,
  LightBulb,
  Book1,
  Book2,
  Book3,
  Book4,
  MyBook1,
  MyBook2,
  MyBook3,
  MyBook4,
} = images;

export const bannerData = [
  { id: 0, image: Duck },
  { id: 1, image: StarBoy },
  { id: 2, image: SadEgg },
  { id: 3, image: LightBulb },
];

export const bestSellingBooksData = [
  {
    id: 0,
    title: "firstBook",
    author: "Dostoevsky",
    imageSource: Book1,
    star: 3.4,
  },
  {
    id: 1,
    author: "Tolostoy",
    title: "secondBook",
    imageSource: Book2,
    star: 5,
  },
  {
    id: 2,
    author: "Mann",
    title: "thirdBook",
    imageSource: Book3,
    star: 4.5,
  },
  {
    id: 3,
    author: "Proust",
    title: "fourthBook",
    imageSource: Book4,
    star: 4.7,
  },
];

export const MyBooksData = [
  {
    id: 0,
    author: "Nabokov",
    title: "Book one",
    imageSource: MyBook1,
  },
  {
    id: 1,
    author: "Mann",
    title: "Book two",
    imageSource: MyBook2,
  },
  {
    id: 2,
    author: "Dostoevsky",
    title: "Book three",
    imageSource: MyBook3,
  },
  {
    id: 3,
    author: "Galaktioni",
    title: "Book four",
    imageSource: MyBook4,
  },
];

export const chartData = [
  {
    id: 0,
    author: "Nabokov",
    title: "Book one",
  },
  {
    id: 1,
    author: "Mann",
    title: "Book two",
  },
  {
    id: 2,
    author: "Dostoevsky",
    title: "Book three",
  },
  {
    id: 3,
    author: "Galaktioni",
    title: "Book four",
  },
  {
    id: 4,
    author: "Dostoevsky",
    title: "Book three",
  },
  {
    id: 5,
    author: "Galaktioni",
    title: "Book four",
  },
];
