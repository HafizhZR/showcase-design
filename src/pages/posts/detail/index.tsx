import Navbar from '@/components/Navbar';
import Avatar from '@/assets/avatar.png';
import PostImage from '@/assets/post-image.png';
import { CgProfile, CgLink } from 'react-icons/cg';
import Image from 'next/image';

export default function PostDetail() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col py-8 px-16'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold uppercase text-primary'>
          Mobile Application For E-Commerce Plant
        </h1>
        <div className='author flex flex-row gap-2 items-center my-3'>
          <div className='avatar'>
            <Image src={Avatar} alt='avatar' className='rounded-full w-6' />
          </div>
          <div>
            <h2 className='text-sm font-semibold uppercase'>Harits Naufal</h2>
          </div>
        </div>
        <div className='content flex flex-col gap-3'>
          <div>
            <Image
              src={PostImage}
              alt='post-image'
              className='w-full min-h-[160px]'
            />
          </div>
          <div>
            <p className='font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sunt cupiditate nostrum itaque possimus hic, ducimus ratione,
              nihil perferendis facere ea iste. Earum laudantium saepe explicabo
              expedita natus ipsum voluptatem tempora unde est atque omnis illum
              rem magnam, odio amet asperiores architecto optio non quo error?
              Tempore vel dolores doloremque ducimus quae, porro molestias eius
              dignissimos vitae eligendi nostrum culpa expedita ipsum reiciendis
              odit placeat error distinctio illo, cum, sequi deserunt nihil
              voluptate totam. Perferendis qui similique accusantium temporibus
              explicabo id doloremque recusandae optio accusamus! Amet quae
              alias obcaecati ratione magnam atque adipisci consequuntur eius,
              neque, enim a ipsam nam sint. Ut placeat autem esse vero molestias
              nisi fuga nostrum, consequuntur a mollitia et explicabo maxime quo
              reiciendis eos aliquid animi aut velit accusantium consequatur hic
              ea! Harum quaerat illo aliquid, autem perspiciatis error animi
              consectetur et tempore iure. Amet saepe voluptatem non magnam nemo
              dolorem tempora voluptas, sequi totam, eos, obcaecati ullam
              incidunt vero. Doloremque natus voluptates, impedit consectetur
              qui a eveniet eum praesentium esse ducimus nihil facilis, atque
              non facere et assumenda amet voluptatibus autem totam rerum ut
              laudantium porro obcaecati! Eveniet nemo est distinctio, nisi
              architecto reiciendis suscipit quidem voluptas beatae sequi!
              Delectus nulla eveniet provident explicabo.
            </p>
          </div>
          <div className='post-info bg-[#005147] min-w-full min-h-auto p-12'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12'>
              <div className='bg-white flex flex-col justify-center p-8 gap-6 w-full md:w-2/4 lg:w-1/3 min-h-fit rounded-lg'>
                <p className='text-[#656470] font-bold uppercase text-sm'>
                  Owner
                </p>
                <div className='owner flex flex-row items-center gap-2'>
                  <div className='avatar'>
                    <Image
                      src={Avatar}
                      alt='avatar'
                      className='rounded-full w-12'
                    />
                  </div>
                  <div className='owner-detail'>
                    <h2 className='font-bold text-md'>Harits Naufal</h2>
                  </div>
                </div>
                <button className='flex bg-primary text-white font-semibold min-h-[40px] w-auto rounded-3xl items-center justify-center'>
                  <CgProfile className='w-4 mr-2' />
                  View Profile
                </button>
              </div>
              <div className='bg-white flex flex-col justify-center p-8 gap-6 w-full md:w-2/4 lg:w-1/3 min-h-fit rounded-lg'>
                <p className='text-[#656470] font-bold uppercase text-sm'>
                  Mobile App - PLANT
                </p>
                <div className='published flex flex-row items-center gap-5'>
                  <div className='publish-detail'>
                    <h2 className='font-bold text-md'>Published At:</h2>
                    <p className='text-base font-medium text-primary'>
                      20 May 2023
                    </p>
                  </div>
                </div>
                <button className='flex bg-primary text-white font-semibold min-h-[40px] w-auto rounded-3xl items-center justify-center'>
                  <CgLink className='w-4 mr-2' />
                  View URL Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
