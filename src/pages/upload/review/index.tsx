import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
            <div className="max-w-full mx-auto bg-white shadow-md p-8 relative mt-2">
                <div className="mb-6">
                    <label htmlFor="title" className="block font-semibold mb-2">
                        Title
                    </label>
                    <p>{title}</p>
                </div>
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
                <div className="mb-6">
                    <label htmlFor="description" className="block font-semibold mb-2">
                        Description
                    </label>
                    <p>{description}</p>
                </div>
                <div className="mb-6">
                    <label htmlFor="link" className="block font-semibold mb-2">
                        Link
                    </label>
                    <p>{link}</p>
                </div>
                <div className="flex justify-end">
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
