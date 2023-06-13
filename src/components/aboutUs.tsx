import Logo from '@/assets/navbar-logo.png';
import Icon from '@/assets/Craftivy-icon.png';
import Image from 'next/image';
import Head from 'next/head';

export default function aboutUs() {
  const content = [
    {
      title: 'Filosofi',
      paragraph:
        'Craftify merupakan sebuah inovasi yang bertujuan untuk memfasilitasi kebutuhan dan memperkaya pengalaman pengguna dalam berbagai aspek kehidupan terutama di bidang desain dan personal branding untuk kreativitas para kreator.',
    },
    {
      title: 'Tujuan',
      paragraph:
        'Kami dengan bangga memperkenalkan tim pengembang Craftify kami yang berdedikasi ini dan kami percaya bahwa semangat mereka akan terus mendorong inovasi dan kesuksesan di masa depan. Dengan kerjasama dan dukungan Anda, kami yakin bahwa platform ini akan menjadi sumber daya yang berharga dan memberikan manfaat yang besar bagi pengguna kami.',
    },
  ];

  const logo = [
    {
      image: Logo,
      name: 'logo craftify',
    },
  ];

  const icon = [
    {
      image: Icon,
      name: 'icon craftify',
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
            <span style={{ color: '#004EC4' }}>Platform</span>{' '}
            <span style={{ color: '#2A9D8F' }}>Craftify</span>
          </h2>

          <div className="flex pb-10">
            {logo.map((data) => (
              <Image
                src={data.image}
                alt={data.name}
                height={135}
                width={425}
              />
            ))}
          </div>

          {content.map((data, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center pl-[50px] pr-[50px]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-2xl text-center font-bold pb-4" style={{ color: '#2A9D8F'}}>{data.title}</h2>
              <p className="break-words text-xl font-medium leading-loose pb-12">
                {data.paragraph}
              </p>
            </div>
          ))}

          <div className="flex pt-8 pb-16">
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
