import { images } from "../images";
const { Duck, StarBoy, SadEgg, LightBulb, Book1, Book2, Book3, Book4 } = images;

export const bannerData = [
  { id: 1, image: Duck },
  { id: 2, image: StarBoy },
  { id: 3, image: SadEgg },
  { id: 4, image: LightBulb },
];

export const bestSellingBooksData = [
  {
    id: 1,
    title: "firstBook",
    author: "Dostoevsky",
    imageSource: Book1,
    star: 3.4,
  },
  {
    id: 2,
    author: "Tolostoy",
    title: "secondBook",
    imageSource: Book2,
    star: 5,
  },
  {
    id: 3,
    author: "Mann",
    title: "thirdBook",
    imageSource: Book3,
    star: 4.5,
  },
  {
    id: 4,
    author: "Proust",
    title: "fourthBook",
    imageSource: Book4,
    star: 4.7,
  },
];
