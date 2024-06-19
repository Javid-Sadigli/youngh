import React from 'react';

import p1 from '../../assets/images/heroPeople/1.png';
import p2 from '../../assets/images/heroPeople/2.png';
import p3 from '../../assets/images/heroPeople/3.png';
import p4 from '../../assets/images/heroPeople/4.png';
import p5 from '../../assets/images/heroPeople/5.png';
import p6 from '../../assets/images/heroPeople/6.png';
import p7 from '../../assets/images/heroPeople/7.png';
import p8 from '../../assets/images/heroPeople/8.png';
import p9 from '../../assets/images/heroPeople/9.png';

const People = () => {
  return (
    <>
      <img className='absolute person1' src={p1} alt="person" />
      <img className='absolute person2' src={p2} alt="person" />
      <img className='absolute person3' src={p3} alt="person" />
      <img className='absolute person4' src={p4} alt="person" />
      <img className='absolute person5' src={p5} alt="person" />
      <img className='absolute person6' src={p6} alt="person" />
      <img className='absolute person7' src={p7} alt="person" />
      <img className='absolute person8' src={p8} alt="person" />
      <img className='absolute person9' src={p9} alt="person" />
    </>
  );
}

export default People;
