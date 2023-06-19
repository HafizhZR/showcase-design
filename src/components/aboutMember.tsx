import ProfilePic from '@/assets/profile-pic.png';
import Logo from '@/assets/navbar-logo.png';
import Icon from '@/assets/Craftivy-icon.png';
import Hafizh from '@/assets/member/hafizh.png';
import Roy from '@/assets/member/roy.png';
import Nicko from '@/assets/member/nicko.png';
import Image from 'next/image';
import Head from 'next/head';

export default function aboutMember() {
  const datas = [
    {
      image: Hafizh,
      name: 'Hafizh Zaghlul Rizal',
      university: 'Universitas Lampung',
      id: 'ID STUDENT : F042XB388',
    },
    {
      image: Roy,
      name: 'Teuku Muhammad Roy Adrian',
      university: 'Universitas Syiah Kuala',
      id: 'ID STUDENT : F063XB134',
    },
    {
      image: ProfilePic,
      name: 'Harits Naufal Ichsan',
      university: 'Universitas Pasundan',
      id: 'ID STUDENT : F111XB253',
    },
    {
      image: Nicko,
      name: 'Nicko Ilham Pramudya',
      university: 'Universitas Muhammadiyah Surakarta',
      id: 'ID STUDENT : F122XB265',
    },
  ];

  const content = [
    {
      paragraph1:
        'Craftify merupakan sebuah inovasi yang bertujuan untuk memfasilitasi kebutuhan dan memperkaya pengalaman pengguna dalam berbagai aspek kehidupan terutama di bidang desain dan personal branding untuk kreativitas para kreator.',
      paragraph2:
        'Kami dengan bangga memperkenalkan tim pengembang Craftify kami yang berdedikasi ini dan kami percaya bahwa semangat mereka akan terus mendorong inovasi dan kesuksesan di masa depan. Dengan kerjasama dan dukungan Anda, kami yakin bahwa platform ini akan menjadi sumber daya yang berharga dan memberikan manfaat yang besar bagi pengguna kami.',
    },
  ];

  const logo = [
    {
      image: Logo,
      name: 'logo craftify'
    },
  ];

  const icon = [
    {
      image: Icon,
      name: 'icon craftify'
    },
  ];

  return (
    <>
      <>
        <Head>
          <title>Tentang - Craftify Member</title>
          <meta name="description" content="Tentang - Craftify Member" />
        </Head>
        <section className="flex flex-col items-center justify-center">
          <h1
            className="pb-4 text-xl font-bold text-primary"
            data-aos="fade-up"
          >
            Tentang
          </h1>
          <h2
            className="pb-8 text-5xl font-bold"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span style={{ color: '#004EC4' }}>Tim Developer dari</span>{' '}
            <span style={{ color: '#2A9D8F' }}>Craftify</span>
          </h2>
          {content.map((data, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center justify-center pr-[50px] pl-[50px] gap-16 px-8 pt-12`}
            >
              <div
                className="flex w-full flex-col items-start justify-center text-justify "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <p className="break-words text-xl font-medium leading-loose pb-12">
                  {data.paragraph1}
                </p>
                <p className="break-words text-xl font-medium leading-loose pb-12">
                  {data.paragraph2}
                </p>
              </div>
            </div>
          ))}
          
          <div className='flex pb-10'>
            {logo.map((data) => (
              <Image 
              src={data.image}
              alt={data.name}
              height={135}
              width={425}
              />
            ))}
          </div>

          <div className="grid w-full grid-cols-4 gap-5 text-center pr-[90px] pl-[90px]">
            {datas.map((data, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col items-center justify-center rounded-md border px-3 py-11 transition-all duration-300 hover:-translate-y-2"
                style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
                data-aos="fade-up"
                data-aos-duration={index * 200 + 600}
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  height={125}
                  width={125}
                  className="pb-[10px]"
                />
                <h1 className="font-semibold text-primary pt-4 pb-4" style={{ fontSize: '16px' }}>
                  {data.name}
                </h1>
                <h2 className="font-semibold text-[#004EC4] pb-2" style={{ fontSize: '18px' }}>
                  {data.university}
                </h2>
                <h3 className="font-bold text-[#252B42] pb-2" style={{ fontSize: '12px' }}>
                  {data.id}
                </h3>
              </div>
            ))}
          </div>
          
          <div className='flex pt-16 pb-16'>
            {icon.map((data) => (
              <Image 
              src={data.image}
              alt={data.name}
              height={100}
              width={100}
              />
            ))}
          </div>
        </section>
      </>
    </>
  );
}
