import cooper from './img/cooper.png';
import benjamin from './img/benjamin.jpg';

interface Person {
  img?: string;
  name: string;
  role: string;
  description: string;
}

const team: Person[] = [
  {
    name: 'Edward Lee',
    role: 'Operating Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: 'Richard Dao',
    role: 'Administrative Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: 'Justin Xiao',
    role: 'Media and Design Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: 'Sahaana Rajesh',
    role: 'Financial Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    img: cooper,
    name: 'Cooper Schnuur',
    role: 'Marketing Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    img: benjamin,
    name: 'Benjamin Hinchliff',
    role: 'Technology Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: 'Inan Xu',
    role: 'Website Officer',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
];

export default team;