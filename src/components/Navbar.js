import { useEffect, useState } from "react";
import Logo from '../../MovieLogo.png';
import Link from 'next/link';


export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <div className='flex border space-x-8 items-center pl-3 py-4'>

          <div className="container mx-auto px-4">
          <div className="flex  justify-center lg:justify-start space-x-8 items-center">

          

            <Link href={`/movies`} className='text-blue-500 text-xl font-semibold hover:text-blue-700'>Movies</Link>

            <Link href={`/watchlist`} className='text-blue-500 text-xl font-semibold hover:text-blue-700'>Watchlist</Link>
            </div>
            </div>
            </div>
        </>
      );


}