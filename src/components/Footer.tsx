import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/navbar-logo.png';
import Twitter from '@/assets/twitter.png';
import YouTube from '@/assets/youtube.png';
import Facebook from '@/assets/facebook.png';
import Pinterest from '@/assets/pinterest.png';

const Footer = () => {
  const footerData = [
    {
      title: 'INFORMASI UMUM',
      links: [
        { title: 'Tentang Craftify', route: '/footer/aboutus' },
        { title: 'Tentang Developer Craftify', route: '/footer/aboutmember' },
      ],
    },
    {
      title: 'BANTUAN',
      links: [{ title: 'FAQ', route: '/footer/faq' }],
    },
    {
      title: 'SEE CRAFTIFY',
      links: [{ title: 'Explore Design Craftify', route: '/' }],
    },
  ];

  return (
    <footer className="bg-gray-800 text-[#2A9D8F] py-8">
      <div className="mx-auto px-4"  style={{ paddingLeft: '50px', paddingRight: '50px'}}>
        <div className="grid grid-cols-4 gap-12">
          <div className="mb-5 flex justify-left flex-col items-start">
            <Link href="/">
              <Image src={Logo} alt="logo" className="h-[28px] md:h-8 w-auto" />
            </Link>
            <h4 className="pb-7 text-lg font-medium text-[#B5B5B5]">
              Send tips, trends, updates & offers
              <br />
              And connect with us
            </h4>
            <div className="flex justify-start">
              <Link href="/pages/404.tsx">
                <Image src={Twitter} alt="logo" className="h-[30px] w-[30px]" />
              </Link>
              <Link href="/pages/404.tsx">
                <Image src={YouTube} alt="logo" className="h-[30px] w-[30px]" />
              </Link>
              <Link href="/pages/404.tsx">
                <Image src={Facebook} alt="logo" className="h-[30px] w-[30px]" />
              </Link>
              <Link href="/pages/404.tsx">
                <Image src={Pinterest} alt="logo" className="h-[30px] w-[30px]" />
              </Link>
            </div>
          </div>
          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="font-bold uppercase">{section.title}</h4>
              {section.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.route}
                  className="hover:opacity-50 hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <hr />

        <div
          className="flex justify-left mx-auto my-auto mt-5 mb-0"
          style={{ paddingLeft: '5px' }}
        >
          <p>
            &#169; 2023 | Craftify is a website to help designers showcase their portfolios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
