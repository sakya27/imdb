import React from 'react';

export default function Banner() {
  return (
    <div className='h-[10vh] md:h-[50vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
         <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4 '>Avengers Endgame</div>
    </div>
  );
}

