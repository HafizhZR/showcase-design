import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/craftifyWhite.png';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='mx-auto px-4'>
        <div className='mb-5 flex justify-center'>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='h-[28px] md:h-8 w-auto' />
          </Link>
        </div>
        <div className='flex justify-between text-center mb-5'>
          <div className='w-full'>
            <Link href='#' className='hover:opacity-50 hover:underline'>
              About Us
            </Link>
          </div>
          <div className='w-full'>
            <Link href='#' className='hover:opacity-50 hover:underline'>
              Help
            </Link>
          </div>
        </div>
        <hr />
        <div className='flex justify-center mx-auto my-auto mt-5 mb-0'>
          <p>
            &#169; 2023 | Craftify merupakan website untuk membantu para
            designer membagikan portfolionya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
