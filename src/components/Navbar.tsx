import { useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { CgProfile, CgLogOff, CgSoftwareUpload } from 'react-icons/cg';
import Logo from '@/assets/navbar-logo.png';
import Avatar from '@/assets/avatar.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const Login = true; // Ubah ke false kalau mau lihat tampilan Navbar ketika belum login, ubah ke true kalau mau lihat tampilan Navbar ketika sudah login
  const user = {
    name: 'Harits Naufal',
  };

  const [isHover, setIsHover] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsHover(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
      <div className='mx-auto flex h-20 items-center justify-between px-8'>
        <div className='flex items-center justify-center gap-6 md:gap-12 font-medium'>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='h-[28px] md:h-8 w-auto' />
          </Link>
          {Login ? (
            <>
              <Link href='#' className='hover:text-primary font-medium text-base hover:underline'>
                Explore
              </Link>
              <Link
                href='/upload/create'
                className='hidden md:block hover:text-primary font-medium text-base hover:underline'
              >
                Create Post
              </Link>
            </>
          ) : (
            <Link href='#' className='hover:text-primary font-medium text-base hover:underline'>
              Explore
            </Link>
          )}
        </div>
        <div className='flex items-center justify-center gap-3 md:gap-11'>
          {Login ? (
            <div className='relative'>
              <div
                className='avatar flex cursor-pointer items-center gap-2 py-2 px-3'
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={handleDropdownToggle}
              >
                <p
                  className='w-24 md:w-36 mr-2 truncate text-right font-semibold'
                  title={user?.name}
                >
                  {user?.name}
                </p>
                <div className='mr-2'>
                  <Image
                    src={Avatar}
                    alt='avatar'
                    className='w-9 md:w-10 rounded-full'
                  />
                </div>
                <div
                  className={`${
                    isDropdownOpen ? 'rotate-180' : ''
                  } transition-transform duration-300`}
                >
                  <BsFillTriangleFill
                    className='text-primary rotate-180'
                    size={10}
                  />
                </div>
              </div>
              {isDropdownOpen && (
                <div
                  className='absolute right-0 z-50 flex -translate-x-2 flex-col items-start justify-center gap-4 rounded-lg bg-white px-5 pt-7 mt-5 md:mt-4 pb-5 drop-shadow-xl'
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                >
                  <Link
                    href='/user/profile'
                    className='flex items-center gap-2 font-semibold text-gray-600 transition-all hover:text-primary'
                  >
                    <CgProfile size={20} />
                    <h3>My Profile</h3>
                  </Link>
                  <Link
                    href='/user/profile'
                    className='flex md:hidden items-center gap-2 font-semibold text-gray-600 transition-all hover:text-primary'
                  >
                    <CgSoftwareUpload size={20} />
                    <h3>Create Post</h3>
                  </Link>
                  <button
                    // onClick={handleLogout}
                    className='flex w-full items-center gap-2 border-t-2 pt-3 font-semibold text-gray-600 transition-all hover:text-primary '
                  >
                    <CgLogOff size={20} />
                    <h3>Logout</h3>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className='flex items-center justify-center gap-3'>
              <Link
                href={'/auth/login'}
                className='rounded-[15px] py-2 px-4 md:py-3 md:px-6 font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-primary/40 hover:drop-shadow-lg'
              >
                Login
              </Link>
              <Link
                href={'/auth/register'}
                className='rounded-[15px] bg-primary py-2 px-4 md:py-3 md:px-6 font-semibold text-white hover:text-white'
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
