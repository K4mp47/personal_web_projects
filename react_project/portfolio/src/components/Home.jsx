import React from 'react';
import Typed from 'react-typed';
import BigBaloon from './BigBaloon';

const Home = () => {
  return(
    <div className='flex flex-col justify-center items-center text-center h-screen'>
      <div className='flex justify-left items-center'>
        <p className='text-3xl text-bold md:text-5xl'>Hi, I am Alberto Campagnolo, and I'm a&nbsp;</p>
        <Typed className='text-[var(--titles)] text-5xl'
          strings = {
            [
              'Developer',
              'Designer',
              'Failure'
            ]
          }
          typeSpeed={100}
          backSpeed={100}
          smartBackspace={false}
          loop
        ></Typed>
      </div>
      <p className='text-xl mb-[40%] md:mb-[10%] pt-2'>
        Image what you <span className='text-[var(--titles)] text-bold text-2xl'>want</span>, i can make it real for you.
      </p>
    </div>
  )
}

export default Home;
