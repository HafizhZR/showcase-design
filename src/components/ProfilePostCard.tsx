import ProfilePic from '@/assets/profile-pic.png';
import PostImage from '@/assets/post-image.png';
import Image from 'next/image';

export default function ProfilePostCard() {
  return (
    <div className='flex flex-col max-w-[150px] lg:max-w-[160px] h-[175px] lg:h-[200px] rounded-lg shadow-xl'>
      <Image
        src={PostImage}
        alt='post-image'
        className='w-full min-h-[120.85px] object-cover rounded-t-lg rounded-r-lg rounded-b-none'
      />
      <div className='flex flex-row items-center gap-1 px-2 pt-2'>
        <Image
          src={ProfilePic}
          alt='profile-pic'
          className='rounded-full w-4'
        />
        <span className='text-[12px] font-medium'>Nicko Ilham</span>
      </div>
      <p className='text-[14px] font-bold px-2'>Mobile App - Plant</p>
    </div>
  );
}
