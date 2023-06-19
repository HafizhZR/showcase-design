import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgProfile, CgLink } from 'react-icons/cg';
import Avatar from '@/assets/avatar.png';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ReviewPostingan() {
  const { data } = useSession();
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();
  const { title, image, description, link } = router.query;
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID');
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
  }, []);

  useEffect(() => {
    if (typeof image === 'string') {
      setImageUrl(`data:image/jpeg;base64,${image}`);
    }
  }, [image]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/getDesign");
      const data = await response.json();
      setPosts(data.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/getDesign");
      const data = await response.json();
      setPosts(data.data);
    };

    fetchPosts();
  }, []);

  const handleCancel = () => {
    router.push('/');
  };

  const handleBack = () => {
    router.push('/upload/create');
  };

  const handlePublish = () => {
    router.push('/explore');
  };

  return (
    <>
      <Navbar />
      <div className='mx-auto mt-10 max-w-7xl'>
        <div className='flex'>
          <button
            type='button'
            className='bg-gray-300 text-black font-bold py-2 px-4 rounded hover:opacity-50 ml-8 w-[150px] h-[50px]'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <div className='flex justify-center items-center mb-6 mx-auto'>
            <div className='flex-wrap items-center justify-center'>
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold mx-auto'>
                1
              </div>
              <div className='h-6'>
                <h1 className='font-semibold mb-6 flex justify-center text-center'>
                  Upload Detail Post
                </h1>
              </div>
            </div>
            <hr className='border-primary border-b-2  w-60 mb-5 weight-100' />
            <div className='flex-wrap items-center justify-center'>
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold mx-auto'>
                2
              </div>
              <div className='h-6 '>
                <h1 className='font-semibold mb-6 flex justify-center text-center'>
                  Review Postingan
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-screen flex flex-col py-8 px-16'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold uppercase text-primary'>
            {title}
          </h1>
          <div className='author flex flex-row gap-2 items-center my-3'>
            <div className='avatar'>
              <Image src={Avatar} alt='avatar' className='rounded-full w-6' />
            </div>
            <div>
              <h2 className='text-sm font-semibold uppercase'>{data?.user?.name}</h2>
            </div>
          </div>
          <div className='content flex flex-col gap-3'>
            {imageUrl && (
              <div className='mt-4'>
                <Image
                  src={imageUrl}
                  alt='Uploaded Image'
                  className='max-w-xs flex mx-auto'
                  width={500}
                  height={300}
                />
              </div>
            )}

            <div>
              <p className='font-normal'>{description}</p>
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
                      <h2 className='font-bold text-md'>{data?.user?.name}</h2>
                    </div>
                  </div>
                  <Link target='_blank' rel="noreferrer" href="../user/profile" className='flex bg-primary text-white font-semibold min-h-[40px] w-auto rounded-3xl items-center justify-center'>
                  <CgProfile className='w-4 mr-2' />
                    View Profile
                  </Link>
                </div>
                <div className='bg-white flex flex-col justify-center p-8 gap-6 w-full md:w-2/4 lg:w-1/3 min-h-fit rounded-lg'>
                  <p className='text-[#656470] font-bold uppercase text-sm'>
                    {title}
                  </p>
                  <div className='published flex flex-row items-center gap-5'>
                    <div className='publish-detail'>
                      <h2 className='font-bold text-md'>Published At:</h2>
                      <p className='text-base font-medium text-primary'>
                        {currentDate}
                      </p>
                    </div>
                  </div>
                  <Link target='_blank' rel="noreferrer" href={'https://figma.com'} className='flex bg-primary text-white font-semibold min-h-[40px] w-auto rounded-3xl items-center justify-center'>
                  <CgLink className='w-4 mr-2' />
                    View URL Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-8'>
            <button
              type='button'
              className='bg-gray-300 text-black font-bold py-2 px-4 rounded hover:opacity-50 ml-4 w-[150px] h-[50px]'
              onClick={handleBack}
            >
              Prev
            </button>
            <button
              type='button'
              className='bg-primary text-white font-bold py-2 px-4 rounded hover:opacity-50 ml-4 w-[150px] h-[50px]'
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
