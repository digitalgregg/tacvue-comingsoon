import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { SocialIcons } from '../../pages';

const Footer = () => {
  const router = useRouter();
  return (
    <>
      {/* Footer Section --Start-- */}
      <footer>
        <div className='px-5 xl:px-16 2xl:px-20 pb-10 font-sans flex items-center justify-between gap-10 md:gap-0'>
          <div className='flex items-center gap-8'>
            <div className='flex items-center cursor-pointer w-[140px] md:w-auto'>
              <Image
                alt='Tacvue Logo'
                className='mr-2'
                src='/images/tacvue-whitegradient-logo.svg'
                width={180}
                height={55}
                onClick={() => router.push('/')}
              />
            </div>
          </div>

          <SocialIcons />
        </div>
      </footer>
      {/* Footer Section --End-- */}
    </>
  );
};

export default Footer;