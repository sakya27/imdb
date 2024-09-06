import React from 'react';

export default function Banner() {
  return (
    <div className='relative w-full h-32 md:h-64   bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
         <div className='text-white sm:text-sm lg:text-xl text-center w-full bg-gray-900/60 p-2 sm:p-0.5 lg:p-4 '>Avengers Endgame</div>
    </div>
  );
}

