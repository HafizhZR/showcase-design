import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import craftifyWhite from '@/assets/craftifyWhite.png';
import bgLogin from '@/assets/background-login.png';
import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Craftify</title>
        <meta name='description' content='Login page Craftify App' />
      </Head>

      <div className='flex h-screen items-center justify-center'>
        <div className='flex h-full w-full basis-1/2 flex-col items-center justify-center text-white'>
          <div className='relative z-10 text-center'>
            <h1 className='pb-4 text-4xl font-semibold'>Welcome Back To</h1>
            <Image
              src={craftifyWhite}
              alt='craftify logo'
              width={351}
              className='mx-auto'
            />
          </div>
          <div className='absolute brightness-50'>
            <Image
              src={bgLogin}
              alt='Background Login'
              className='h-screen'
              loading='lazy'
            />
          </div>
          <Link
            href='/'
            className='absolute top-5 left-5 rounded-full bg-white p-2 text-black hover:opacity-50'
          >
            <FaHome className='h-10 w-10' />
          </Link>
        </div>

        <form
          className='flex h-full basis-1/2 flex-col items-start justify-center px-[66px] min-w-fit '
          onSubmit={handleSubmit}
        >
          <h2 className='pb-2 text-[44px] font-extrabold'>Log In</h2>
          <h3 className='pb-20 text-xl'>
            New user?{' '}
            <Link
              href='/auth/register'
              className='underline-animation text-primary hover:text-primary text-color-mint'
            >
              Create an account
            </Link>
          </h3>

          <div className='flex w-full flex-col items-start justify-center pb-10'>
            <label className='pb-3 text-lg font-medium text-[#9F9F9F]'>
              Your email address
            </label>
            <input
              type='email'
              placeholder=''
              name='email'
              value={email}
              onChange={handleEmailChange}
              className='w-full border-b-2 border-[#9F9F9F] p-2 focus:outline-none'
            />
          </div>

          <div className='flex w-full flex-col justify-center pb-24'>
            <label className='pb-3 text-lg font-medium text-[#9F9F9F]'>
              Your password
            </label>
            <div className='mb-3 flex w-full items-center justify-between'>
              <input
                type='password'
                placeholder=''
                name='password'
                value={password}
                onChange={handlePasswordChange}
                className='w-full border-b-2 border-[#9F9F9F] p-2 focus:outline-none'
              />
            </div>
            <div className='text-end'>
              <Link
                href='/auth/forgot-password'
                className='float-right w-fit text-primary'
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className='flex w-full items-center justify-center'>
            <button
              type='submit'
              className='flex bg-primary px-10 py-3 rounded-full text-white font-bold relative bottom-10 hover:opacity-50'
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
