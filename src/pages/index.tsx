import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import headLogo from '@/assets/headLogo.png';
import toolsIcon from '@/assets/tools.png';
import smileIcon from '@/assets/smile.png';
import peopleIcon from '@/assets/account-group.png';
import miniBg from '@/assets/image.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Homepage - Craftify</title>
        <meta name='description' content='Homepage Carftify App' />
      </Head>
      <div className='min-h-screen flex flex-col md:flex-row md:items-center py-8 px-8'>
        <div className='md:order-2 mt-20 ml-40'>
          <Image src={headLogo} alt='Logo' width={800} height={100} />
        </div>
        <div className='md:order-1'>
          <h1 className='text-5xl font-bold mt-20 ml-10'>
            <span className='text-primary'>
              Bagikan dan temukan kreativitas
            </span>
            <br />
            <span className='text-primary'>karya desain Anda</span>
            <br />
            <span className='text-secondary'>bersama kami</span>
          </h1>
          <h2 className='text-2xl ml-10'>
            <span className='text-primary font-semibold'>Craftify</span>{' '}
            <span>
              sebuah platform yang dirancang untuk memberikan ruang bagi para
              Kreator Desain untuk memamerkan karya mereka dan terhubung dengan pengguna lain
            </span>
          </h2>
          <button className='bg-primary hover:bg-opacity-50 text-white font-bold ml-10 mt-5 py-2 px-10 rounded'>
            Cari sekarang
          </button>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-full p-20'>
          <h1 className='text-3xl font-bold text-center '>
            <span className='text-primary'>Platform terbaik untuk</span>{' '}
            <span className='text-secondary'>Memamerkan karya desain</span>
          </h1>
          <section className='mt-4'>
            <p className='text-lg text-center font-semibold ml-48 mr-48'>
              <span className='text-primary'>Craftify</span> adalah platform
              yang dirancang untuk menyediakan ruang bagi para Kreator Desain
              untuk memamerkan karya mereka dan terhubung dengan pengguna
              lainnya. Platform ini akan menyediakan fitur seperti galeri
              desain, profil pengguna, dan forum diskusi untuk memperluas
              jaringan kreator dan memberikan inspirasi. Platform ini merupakan
              platform yang berguna bagi para kreator untuk membangun peluang
              baru dalam dunia desain.
            </p>
          </section>
          {/* Card */}
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white p-4 shadow-lg rounded-lg text-center'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center'>
                    <Image src={toolsIcon} alt='Icon 1' className='w-6 h-6' />
                  </div>
                  <h2 className='text-primary text-xl font-bold mt-4'>
                    Kategori Desain yang beragam dari para Kreator Desain
                  </h2>
                  <p className='mt-2'>
                    Memberikan berbagai Kategori Desain yang lengkap dan
                    beragam, yang dapat membantu untuk meningkatkan kreativitas
                    Kreator Desain lebih baik dalam menciptakan karya-karya yang
                    lebih menarik dan inovatif.
                  </p>
                </div>
              </div>
              <div className='bg-white p-4 shadow-lg rounded-lg text-center'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center'>
                    <Image src={smileIcon} alt='Icon 2' className='w-6 h-6' />
                  </div>
                  <h2 className='text-primary text-xl font-bold mt-4'>
                    Platform yang mudah digunakan semua kalangan Pengguna
                  </h2>
                  <p className='mt-2'>
                    Di rancang dengan tampilan yang user friendly dan mudah
                    digunakan, bahkan oleh orang awam sekalipun. Pengguna dapat
                    dengan mudah memamerkan karya-karya mereka dan
                    mengeksplorasi ide-ide desain baru di platform ini
                  </p>
                </div>
              </div>
              <div className='bg-white p-4 shadow-lg rounded-lg text-center'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center'>
                    <Image src={peopleIcon} alt='Icon 3' className='w-6 h-6' />
                  </div>
                  <h2 className='text-primary text-xl font-bold mt-4'>
                    Kontak Diskusi untuk berbagi Ide Desain sesama Kreator
                  </h2>
                  <p className='mt-2'>
                    Para Kreator Desain dapat saling bertukar ide dan memberikan
                    umpan balik satu sama lain untuk membantu meningkatkan
                    kualitas karya desain yang dihasilkan dan memperkuat
                    komunitas dan relasi kreatif di platform ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-20'>
            <h2 className='text-primary text-3xl font-bold mb-5'>
              Sekilas tentang <span className='text-secondary'>Craftify</span>
            </h2>
            <p className='text-lg text-center font-semibold ml-48 mr-48'>
            <span className='text-primary font-semibold'>Craftify</span>{' '}
              merupakan platform yang dirancang khusus untuk memberikan
              kesempatan kepada para Kreator Desain untuk memamerkan
              karya-karyanya dan terhubung dengan pengguna lain yang sedang
              mencari inspirasi desain. Dengan <span className='text-primary font-semibold'>Craftify</span> 
              kreativitas para Kreator Desain dapat ditampung dan ditampilkan dengan mudah,
              sehingga para pengguna lain dapat menemukan inspirasi baru dan
              mengeksplorasi berbagai ide desain yang menarik.
            </p>
          </div>
          {/* For creator section */}
          <div className='flex flex-col items-center justify-center mt-20'>
            <div className='relative'>
              <Image src={miniBg} alt='Image' className='mb-4' />
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-1xl text-white font-semibold uppercase'>
                  Temukan inpirasi desain kamu
                </h1>
                <button className='mt-4 border border-white-500 text-white rounded-md px-4 py-2 hover:bg-opacity-50 hover:text-gray-400 transition-colors duration-300 uppercase'>
                  ke laman explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
