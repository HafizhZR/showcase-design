import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgProfile, CgLink } from 'react-icons/cg';
import Avatar from '@/assets/avatar.png';

export default function ReviewPostingan() {
    const router = useRouter();
    const { title, image, description, link } = router.query;
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (typeof image === 'string') {
            setImageUrl(`data:image/jpeg;base64,${image}`);
        }
    }, [image]);

    const handleCancel = () => {
        router.push('/');
    };

    const handleBack = () => {
        router.push('/upload/create');
    };

    const handlePublish = () => {
        // publikasi postingan
    };

    return (
        <div className="mx-auto mt-10 max-w-7xl">
            <div className="flex">
                <button
                    type="button"
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:opacity-50 ml-8 w-[150px] h-[50px] sm:w-[100px] sm:h-[40px]"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <div className="flex justify-center items-center mb-6 mx-auto">
                    <div className="flex-wrap items-center justify-center">
                        <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold mx-auto">
                            1
                        </div>
                        <div className="h-6 sm:w-10">
                            <h1 className="font-semibold mb-6 sm:text-sm flex justify-center text-center">
                                Upload Detail Post
                            </h1>
                        </div>
                    </div>
                    <hr className="border-primary border-b-2 sm:w-32 w-60 mb-5 weight-100" />
                    <div className="flex-wrap items-center justify-center">
                        <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold mx-auto">
                            2
                        </div>
                        <div className="h-6 sm:w-10">
                            <h1 className="font-semibold mb-6 sm:text-sm flex justify-center text-center">
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
                        <h2 className='text-sm font-semibold uppercase'>Harits Naufal</h2>
                    </div>
                </div>
                <div className='content flex flex-col gap-3'>
                {imageUrl && (
                    <div className="mt-4">
                        <Image
                            src={imageUrl}
                            alt="Uploaded Image"
                            className="max-w-xs flex mx-auto"
                            width={500}
                            height={300}
                        />
                    </div>
                )}

                    <div>
                        <p className='font-normal'>
                        {description}
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
                                    {title}
                                </p>
                                <div className='published flex flex-row items-center gap-5'>
                                    <div className='publish-detail'>
                                        <h2 className='font-bold text-md'>Published At:</h2>
                                        <p className='text-base font-medium text-primary'>
                                            20 May 2023
                                        </p>
                                    </div>
                                </div>
                                {/* link masih belum berfungsi */}
                                <button className='flex bg-primary text-white font-semibold min-h-[40px] w-auto rounded-3xl items-center justify-center'>
                                    <CgLink className='w-4 mr-2' />
                                    View URL Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <button
                        type="button"
                        className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:opacity-50 ml-4 w-[150px] h-[50px] sm:w-[100px] sm:h-[40px]"
                        onClick={handleBack}
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        className="bg-primary text-white font-bold py-2 px-4 rounded hover:opacity-50 ml-4 w-[150px] h-[50px] sm:w-[100px] sm:h-[40px]"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
}