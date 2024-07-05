import card1 from '../assets/images/cards/card1.svg';
import card2 from '../assets/images/cards/card2.svg';
import card3 from '../assets/images/cards/card3.svg';

const CardData = [
  {
    id: 1,
    imgSrc: card2,
    title: 'Sign In',
    description: 'Sign in to connect with our mentors',
    linkText: 'Testimonials',
    linkUrl: '/login'
  },
  {
    id: 2,
    imgSrc: card1,
    title: 'Explore mentors',
    description: 'Find mentors with different skills, jobs and so on.',
    linkText: 'Testimonials',
    linkUrl: '/mentors'
  },
  
  // {
  //   id: 3,
  //   imgSrc: card3,
  //   title: 'Online Meet',
  //   description: 'Leverage agile frameworks provide high level overviews value proposition.',
  //   linkText: 'Testimonials',
  //   linkUrl: '/'
  // }
];

export default CardData;
