import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CgArrowLeft, CgSoftwareUpload } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { ChangeEvent, useState } from 'react';

export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImagePreview(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col py-8 px-8'>
        <Link href='/user/profile' className='w-10'>
          <button className='bg-primary w-10 h-10 rounded-full shadow-xl'>
            <CgArrowLeft className='text-white text-3xl mx-auto' />
          </button>
        </Link>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8 p-16 md:px-40 lg:px-8 w-full'>
          <div className='flex flex-col gap-8 lg:w-5/12 xl:3/12'>
            <div className='relative w-full flex flex-col gap-6'>
              <div className='text-xl font-semibold'>User Name</div>
              <input
                type='text'
                name='user_name'
                id='user_name'
                className='w-full border-b-2 border-custom focus:border-custom focus:outline-none pr-10 border-primary text-primary text-base'
              />
              <div className='absolute inset-y-0 right-0 flex items-end pointer-events-none'>
                <AiOutlineUser className='h-6 w-6 text-primary mb-2' />
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='text-xl font-semibold'>Profile Picture</div>
              <input
                type='file'
                name='user_img'
                id='user_img'
                accept='image/png, image/jpeg, image/webp'
                className='hidden'
                onChange={handleImageUpload}
              />
              <label htmlFor='user_img'>
                <div className='flex flex-row gap-3 border-2 border-primary p-4 rounded-2xl hover:cursor-pointer'>
                  <CgSoftwareUpload className='text-primary text-2xl' />
                  <div className='text-primary text-base'>
                    Choose your Picture
                  </div>
                </div>
              </label>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt='Preview'
                  className='mt-3 rounded-lg max-w-[300px] max-h-[300px]'
                />
              )}
            </div>
          </div>
          <div className='flex flex-col gap-8 lg:w-7/12 xl:9/12'>
            <div className='text-xl font-semibold'>Description</div>
            <textarea
              name='user_description'
              id='user_description'
              rows={6}
              maxLength={100}
              className='w-full border-2 border-custom focus:border-custom focus:outline-none border-primary text-primary p-2 rounded-2xl'
              placeholder='Write Something...'
            />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <button className='bg-primary border-2 border-white rounded-2xl text-white uppercase py-3 px-5 w-[180px] font-semibold text-sm'>
            Save Changes
          </button>
          <Link href='/user/profile'>
            <button className='bg-primary border-2 border-white rounded-2xl text-white uppercase py-3 px-5 w-[180px] font-semibold text-sm'>
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
