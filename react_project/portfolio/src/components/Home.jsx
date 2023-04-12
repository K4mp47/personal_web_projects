import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return(
    <div className='flex flex-col justify-center items-center text-center h-screen bg-[var(--color1)] m-[3%] rounded-3xl'>
      <div className='flex flex-col lg:flex-row min-[1850px]:justify-left items-center min-[1850px]:w-full'>
        <p className='text-3xl text-bold md:text-5xl min-[1850px]:ml-[22%]'>Hi, I am Alberto Campagnolo, and I'm a&nbsp;</p>
        <div className='min-[1850px]:absolute min-[1850px]:pl-[45%] min-[1850px]:ml-[22%] text-left min-[1850px]:w-[28%] pt-[3px]'>
        <Typed className='text-[var(--titles)] text-3xl md:text-5xl font-medium'
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
      </div>
      <p className='text-xl mb-[40%] md:mb-[10%] pt-2'>
        Image what you <span className='text-[var(--titles)] text-bold text-xl font-medium'>want</span>, i can make it real for you.
      </p>
    </div>
  )
}

export default Home;
