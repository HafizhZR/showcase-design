import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Upload() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<null | File[]>(null);
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleTitleChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setTitle(value);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImage(Array.from(files));
        }
    };

    const handleDescriptionChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setDescription(value);
    };

    const handleLinkChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setLink(value);
    };

    const handleNext = () => {
        // Lakukan validasi atau operasi yang diperlukan sebelum pindah ke tahap berikutnya
        console.log('Next button clicked');
    };

    const handleCancel = () => {
        // Kembali ke halaman home
        router.push('/');
    };

    return (
        <div className="mx-auto mt-10 max-w-7xl">
            <div className='flex'>
            <button
                type="button"
                className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400 ml-8 w-[150px] h-[50px] sm:w-[100px] sm:h-[40px]"
                onClick={handleCancel}
            >
                Cancel
            </button>
            <div className="flex justify-center items-center mb-6 mx-auto">
                <div className="flex-wrap items-center justify-center">
                    <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold mx-auto">
                        1
                    </div>
                    <div className="h-6 sm:w-10"><h1 className="font-bold mb-6 sm:text-sm flex justify-center text-center">Upload Detail Post</h1></div>
                </div>
                <hr className="border-gray-300 border-b-2 sm:w-32 w-60 mb-5 weight-100"/>
                <div className="flex-wrap items-center justify-center">
                    <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold mx-auto">
                        2
                    </div>
                    <div className="h-6 sm:w-10"><h1 className="font-bold mb-6 sm:text-sm flex justify-center text-center">Review Postingan</h1></div>
                </div>
            </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="max-w-full mx-auto bg-white shadow-md p-8 relative mt-2">
                <div className="mb-6">
                    <label htmlFor="title" className="block font-semibold mb-2">
                        Judul Postingan
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border border-gray-300 p-2 w-full"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <>
                    <div className="mb-6">
                        <label htmlFor="image" className="block font-semibold mb-2">
                            Upload Thumbnail
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border border-gray-300 p-2 w-full"
                        />
                        {image && (
                            <div className="mt-4">
                                <Image
                                    src={URL.createObjectURL(image[0])} // Menggunakan URL.createObjectURL untuk mendapatkan URL gambar
                                    alt="Uploaded Image"
                                    className="max-w-xs flex mx-auto"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block font-semibold mb-2">
                            Deskripsi Postingan
                        </label>
                        <textarea
                            id="description"
                            rows={10}
                            className="border border-gray-300 p-2 w-full"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="link" className="block font-semibold mb-2">
                            Link Project
                        </label>
                        <input
                            type="text"
                            id="link"
                            className="border border-gray-300 p-2 w-full mb-20"
                            value={link}
                            onChange={handleLinkChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="bg-primary font-bold text-white py-2 px-4 w-[125px] h-[41px] rounded hover:bg-blue-600 absolute right-8 bottom-16"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </>
            </form>
        </div>
    );
}
