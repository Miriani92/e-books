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
export const chartFilterButtonsData = [
  {
    id: 0,
    text: "week",
    title: "weekly",
  },
  {
    id: 1,
    text: "month",
    title: "monthly",
  },
  {
    id: 2,
    text: "year",
    title: "yearly",
  },
  {
    id: 3,
    text: "all time",
    title: "allTime",
  },
];

export const mostPopular = {
  weekly: [
    {
      id: 0,
      data: "week",
      title: "most_popular",
    },
    {
      id: 1,
      data: "week",
      title: "most_popular",
    },

    {
      id: 2,
      data: "week",
      title: "most_popular",
    },
  ],
  monthly: [
    {
      id: 0,
      data: "month",
      title: "most_popular",
    },
    {
      id: 1,
      data: "month",
      title: "most_popular",
    },

    {
      id: 2,
      data: "month",
      title: "most_popular",
    },
  ],
  yearly: [
    {
      id: 0,
      data: "yearly",
      title: "most_popular",
    },
    {
      id: 1,
      data: "yearly",
      title: "most_popular",
    },

    {
      id: 2,
      data: "yearly",
      title: "most_popular",
    },
  ],
  allTime: [
    {
      id: 0,
      data: "alltime",
      title: "most_popular",
    },
    {
      id: 1,
      data: "alltime",
      title: "most_popular",
    },

    {
      id: 2,
      data: "alltime",
      title: "most_popular",
    },
  ],
};

export const mostActive = {
  weekly: [
    {
      id: 0,
      data: "week",
      title: "most_active",
    },
    {
      id: 1,
      data: "week",
      title: "most_active",
    },

    {
      id: 2,
      data: "week",
      title: "most_active",
    },
  ],
  monthly: [
    {
      id: 0,
      data: "month",
      title: "most_active",
    },
    {
      id: 1,
      data: "month",
      title: "most_active",
    },

    {
      id: 2,
      data: "month",
      title: "most_active",
    },
  ],
  yearly: [
    {
      id: 0,
      data: "yearly",
      title: "most_active",
    },
    {
      id: 1,
      data: "yearly",
      title: "most_active",
    },

    {
      id: 2,
      data: "yearly",
      title: "most_active",
    },
  ],
  allTime: [
    {
      id: 0,
      data: "alltime",
      title: "most_active",
    },
    {
      id: 1,
      data: "alltime",
      title: "most_active",
    },

    {
      id: 2,
      data: "alltime",
      title: "most_active",
    },
  ],
};

export const readerList = [
  {
    id: 0,
    data: "readerOne",
    title: "reader",
  },
  {
    id: 1,
    data: "readerTwo",
    title: "reader",
  },
  {
    id: 2,
    data: "readerThree",
    title: "reader",
  },
];
