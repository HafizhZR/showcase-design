import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfilePostCard from '@/components/ProfilePostCard';
import { CgPen, CgMenuGridR } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import ProfilePic from '@/assets/profile-pic.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className='bg-profile min-h-screen flex flex-col py-8 px-8'>
        <Link href='/' className='w-10'>
          <button className='bg-primary w-10 h-10 rounded-full outline outline-2 outline-white shadow-xl'>
            <AiFillHome className='text-white text-xl mx-auto' />
          </button>
        </Link>
        <div className='flex flex-col md:items-center lg:flex-row gap-8 p-8'>
          <div className='flex flex-col px-6 py-6 gap-3 rounded-2xl bg-white shadow-2xl md:w-3/4 lg:w-2/4 lg:min-h-[475px] xl:w-2/6 2xl:3/12'>
            <div className='flex justify-end'>
              <Link href='/user/profile/edit'>
                <button className='flex flex-row py-1 px-2 gap-1 rounded-lg bg-primary items-center'>
                  <CgPen className='text-white text-base' />
                  <span className='text-white text-base'>Edit Profile</span>
                </button>
              </Link>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Image
                src={ProfilePic}
                alt='profile-pic'
                className='rounded-xl w-[100px] mx-auto'
              />
              <p className='font-semibold text-lg text-primary mx-auto'>
                Nicko Ilham
              </p>
              <hr className='border-[#B5B5B5] border-[1.5px] w-full my-1' />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-sm'>Graphic Designer</p>
              <p className='font-medium text-sm'>email@domain.com</p>
              <p className='font-medium text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, dicta.
              </p>
            </div>
          </div>
          <div className='flex flex-col px-6 py-6 gap-6 rounded-2xl bg-white shadow-2xl md:w-3/4 lg:w-2/4 max-h-[475px] xl:w-4/6 2xl:9/12 overflow-auto hidden-scroll'>
            <div className='flex flex-row gap-3 justify-center'>
              <div className='flex flex-row items-center gap-1'>
                <CgMenuGridR className='text-[#252525]' />
                <span className='uppercase font-semibold text-sm'>
                  Postingan Anda
                </span>
              </div>
            </div>
            <div className='flex flex-wrap justify-center pb-4 gap-4'>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
              <Link href='/posts/detail'>
                <ProfilePostCard />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
