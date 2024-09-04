import { useEffect, useState } from "react";
import Logo from '../../MovieLogo.png';
import Link from 'next/link';


export default function Home() {

    return (
        <>
          <div className='flex border space-x-8 items-center pl-3 py-4'>

            <img className='w-[50px]' src={Logo} alt="" />

            <Link href={`/movies`} className='text-blue-500 text-3xl font-bold'>Movies</Link>

            <Link href={`/watchlist`} className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
            </div>
        </>
      );


}