import Illustration from '@/assets/illustration.png';
import IconFaq from '@/assets/icon_faq.png';
import Image from 'next/image';
import Head from 'next/head';

export default function faq() {
  const faqs = [
    {
      question: 'Apa itu Craftify?',
      answer:
        'Craftify adalah platform situs web yang memungkinkan para Kreator Desain untuk memamerkan karya terbaik mereka dan berinteraksi dengan pengguna lain yang tertarik dengan desain.',
    },
    {
      question: 'Apa saja keuntungan bergabung dengan Craftify?',
      answer:
        'Bergabung dengan Craftify memberikan kesempatan kepada Kreator Desain untuk membangun portofolio mereka, menemukan inspirasi, dan terhubung dengan sesama kreator dan penggemar desain.',
    },
    {
      question: 'Bagaimana cara upload karya di Craftify?',
      answer:
        'Untuk mengupload karya Anda di Craftify, kunjungi situs  kami dan klik tombol "Create Post". Isi informasi yang diperlukan untuk desain Anda dan publish karya Anda untuk mulai terhubung dengan para kreator kami platform kami.',
    },
  ];

  const illustration = [
    {
      image: Illustration,
      name: 'illustration service',
    },
  ];

  return (
    <>
      <>
        <Head>
          <title>FAQ - Craftify</title>
          <meta name="description" content="FAQ - Craftify" />
        </Head>
        <section className="flex flex-col items-center justify-center">
          <h1
            className="pb-4 text-xl font-bold text-primary"
            data-aos="fade-up"
          >
            FAQ
          </h1>
          <h2
            className="pb-12 text-5xl font-bold"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span style={{ color: '#004EC4' }}>Pertanyaan Seputar</span>{' '}
            <span style={{ color: '#2A9D8F' }}>Craftify</span>
          </h2>

          <Image src={IconFaq} alt="icon faq" className="h-[115px] w-[115px]" />
          
          <div
            className="flex w-[664px] flex-col items-center justify-center gap-3 pt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="grid w-full gap-3 text-center items-center rounded-md border border-gray-300 p-4"
              >
                <h3 className="text-lg text-left font-bold mb-2" style={{ color: '#2A9D8F'}}>{faq.question}</h3>
                <p className="text-base text-justify font-semibold">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="flex pt-10 pb-20">
            {illustration.map((data) => (
              <Image
                src={data.image}
                alt={data.name}
                height={135}
                width={425}
              />
            ))}
          </div>
        </section>
      </>
    </>
  );
}
