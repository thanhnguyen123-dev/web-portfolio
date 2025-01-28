import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center p-40'>
      <TextGenerateEffect words="I'm Thanh Nguyen, a Computer Science student @ ANU." className='text-[40px]' />
      <p>He/Him</p>
    </div>
  );
}

export default Hero;