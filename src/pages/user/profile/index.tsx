import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CgPen, CgMenuGridR } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import ProfilePic from '@/assets/profile-pic.png';
import Image from 'next/image';
import Link from 'next/link';
import PostImage from '@/assets/post-image.png';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from "react";

const Profile: React.FC  = () => {
  const { data } = useSession();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://be-test-deploy.vercel.app/design");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
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
                {data?.user?.name}
              </p>
              <hr className='border-[#B5B5B5] border-[1.5px] w-full my-1' />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-sm'>Graphic Designer</p>
              <p className='font-medium text-sm'>{data?.user?.email}</p>
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
                {posts.map((post) => (
                  <Link href={`/posts/detail/${post._id}`} key={post._id}>
                    <div className='flex flex-col max-w-[150px] lg:max-w-[160px] h-[175px] lg:h-[200px] rounded-lg shadow-xl'>
                      <Image
                        src={`data:image/png;base64,${post.thumbnail_design}`}
                        width={150}
                        height={100}
                        alt='post-image'
                        className='w-full min-h-[120.85px] object-cover rounded-t-lg rounded-r-lg rounded-b-none'
                      />
                      <div className='flex flex-row items-center gap-1 px-2 pt-2'>
                        <Image
                          src={ProfilePic}
                          alt='profile-pic'
                          className='rounded-full w-4'
                        />
                        <span className='text-[12px] font-medium'>{data?.user?.name}</span>
                      </div>
                      <p className='text-[14px] font-bold px-2'>{post.judul_design}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default Profile;