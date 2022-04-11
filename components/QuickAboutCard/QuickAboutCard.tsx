import Image from 'next/image';
import React, { ComponentProps, ReactNode } from 'react';

type QuickAboutCardProps = {
  img: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  name: ReactNode;
  title: ReactNode;
};
const QuickAboutCard = ({
  img: { src, width, height, alt },
  name,
  title,
}: QuickAboutCardProps) => {
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(#0c0b15,#0c0b15) padding-box,linear-gradient(0deg,rgba(255,255,255,0.2),#161d25,#161d25) border-box',
        }}
        className='rounded-[18px] overflow-hidden relative border border-transparent'
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          //   layout='responsive'
          objectFit='cover'
        />

        <div
          style={{
            background:
              'linear-gradient(237.69deg, rgba(18, 24, 49, 0.44) 2.21%, rgba(0, 7, 21, 0.44) 87.3%)',
            backdropFilter: 'blur(88.6504px)',
          }}
          className='absolute bottom-0 left-0 px-[26px] py-[18px] rounded-t-[18px] overflow-hidden w-full h-[84px] flex flex-col justify-center'
        >
          <h5 className='font-spaced text-white text-xl'>{name}</h5>
          <p className='font-semibold text-base text-white mt-1'>{title}</p>
        </div>
      </div>
    </>
  );
};

export default QuickAboutCard;
