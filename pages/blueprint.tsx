import React, { ComponentProps } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import Header from '../components/Header';
import cx from 'classnames';
import ServiceCard from '../components/ServiceCard';
import { BsArrowRightShort } from 'react-icons/bs';
import Footer from '../components/Footer';

export const subtitle_sm = 'text-lg text-[#9EB5E1] !leading-[160%] capitalize';
export const text_gradient =
  'text-transparent bg-clip-text bg-gradient-to-r from-[#6396F9] to-[#00D1FF]';
export const title_sm =
  'text-[65px] leading-[60px] font-spaced uppercase -mb-2';

export type ServiceType = {
  img: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
};
const services: ServiceType[] = [
  {
    img: {
      src: '/images/create_icon.svg',
      width: 41,
      height: 41,
    },
    title: 'CREATE',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/explore_icon.svg',
      width: 52,
      height: 51,
    },
    title: 'EXPLORE',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/buy_sell_icon.svg',
      width: 51,
      height: 41,
    },
    title: 'BUY & SELL',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/setup_wallet_icon.svg',
      width: 56,
      height: 40,
    },
    title: 'Set up your wallet',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/add_nft_icon.svg',
      width: 56,
      height: 40,
    },
    title: 'Add your NFTs',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/list_icon.svg',
      width: 56,
      height: 40,
    },
    title: 'List them for sale',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/create_icon.svg',
      width: 41,
      height: 41,
    },
    title: 'CREATE',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
  {
    img: {
      src: '/images/create_icon.svg',
      width: 41,
      height: 41,
    },
    title: 'CREATE',
    subtitle: 'Create your entity card with your own personal HQ.',
  },
];

const Blueprint = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)',
      }}
    >
      {/* <Header /> */}

      {/* Hero Section --Start-- */}
      <section className='relative'>
        <img
          src='/images/blueprint_bg.png'
          alt='blueprint_bg'
          className='w-full h-auto'
        />

        <div className='absolute left-1/2 -translate-x-1/2 top-20 w-[500px]'>
          <img src='/images/globe.svg' alt='globe' />
        </div>

        <div className='absolute top-0 left-0 w-full z-[5] min-h-screen flex flex-col justify-center'>
          <div className='container'>
            <h1 className='text-white font-spaced text-center text-[120px] leading-[105px]'>
              <p>Built for</p>
              <p>your journey</p>
            </h1>
            <p className='text-xl text-[#CDF4FF] w-[680px] mx-auto text-center mt-[40px]'>
              Avalanche is the fastest smart contracts platform in the
              blockchain industry. Launch, Buy, and Create NFTs supported by the
              future of blockchain tech.
            </p>
          </div>

          {/* Learn More --Start-- */}
          <a
            // data-aos="fade-up"
            href='#story'
            className='flex flex-col items-center z-10 cursor-pointer text-white absolute left-1/2 -translate-x-1/2 bottom-16 group'
          >
            <p>Learn More</p>
            <div className='animate_slide_up_down'>
              <HiChevronDoubleDown
                size={30}
                className='group-hover:translate-y-2 duration-200'
              />
            </div>
          </a>
          {/* Learn More --End-- */}
        </div>
      </section>
      {/* Hero Section --End-- */}

      {/* Story Section --Start-- */}
      <section className='mt-10 pb-20' id='story'>
        <div className='container'>
          <div className='grid grid-cols-[45%,auto] gap-10 place-items-center'>
            <div className='relative'>
              <div className='absolute top-0 left-6 bg-gradient-to-r from-[#6396F9] to-[#00D1FF] w-[260px] h-[290px] rounded-full blur-[125px] opacity-40'></div>

              <div className='relative z-[5]'>
                <p
                  className={cx(
                    text_gradient,
                    'font-bold -mb-2 tracking-widest',
                  )}
                >
                  STORY
                </p>
                <h2 className={cx(title_sm, text_gradient)}>Tavues story</h2>
                <img src='/images/gradient_rectangle.svg' alt='' />
                <p className={cx(subtitle_sm, 'md:w-[75%] mt-8')}>
                  After four friends discovered Solana and its tremendous
                  potential, Magic Eden was born. With backgrounds across
                  crypto, DeFi, consumer internet
                </p>
                <p className={cx(subtitle_sm, 'mt-6 md:w-[75%]')}>
                  companies and management consulting, they identified gaps in
                  existing NFT marketplaces and created something new.
                </p>

                <Button className='mt-[43px]' />
              </div>
            </div>
            <div
              style={{
                background: "url('/images/story_image_bg.svg')",
                backgroundSize: '110%',
              }}
              className='bg-bottom'
            >
              <img
                src='/images/tacvue_sory_image.svg'
                alt='tacvue_sory_image'
                className='scale-[1.2] origin-top-right'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Story Section --End-- */}

      {/* Services Section --Start-- */}
      <section className='mt-[150px]'>
        <div className='container'>
          <div className='text-center'>
            <h2 className={cx(title_sm, text_gradient)}>OUR Services</h2>
            <p className={cx(subtitle_sm, 'mt-[40px] md:w-[500px] mx-auto')}>
              After four friends discovered Solana and its tremendous potential,
              Magic Eden was born
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-[50px] mt-[75px]'>
            {services.map((service: ServiceType, i: number) => (
              <ServiceCard {...service} key={i} />
            ))}
          </div>
          <div className='flex justify-center overflow-hidden max-w-[100vw] mt-[40px]'>
            <img
              src='/images/services_rectengle.svg'
              alt='services_rectengle'
              className='w-[120%]'
            />
          </div>
        </div>
      </section>
      {/* Services Section --End-- */}

      {/* Partners Section --Start-- */}
      <section className='mt-[120px]'>
        <div className='container'>
          <div className='text-center'>
            <h2 className={cx(title_sm, text_gradient)}>our partners</h2>
            <p className={cx(subtitle_sm, 'mt-[40px]')}>
              After four friends discovered Solana and its friends discovere{' '}
            </p>
          </div>

          <div className='mt-[105px] flex items-center justify-center gap-10'>
            <img src='/images/brand_1.png' alt='brand 1' />
            <img src='/images/brand_2.png' alt='brand 2' />
            <img src='/images/brand_3.png' alt='brand 3' />
          </div>
        </div>
      </section>
      {/* Partners Section --End-- */}

      {/* Join Section --Start-- */}
      <section className='mt-[120px] mb-[60px]'>
        <div className='container'>
          <div className='w-fit mx-auto relative'>
            <img src='/images/join_bg.svg' alt='join_bg' />
            <div className='absolute top-1/2 -translate-y-1/2 left-0 w-full text-center'>
              <h3 className={cx(title_sm, text_gradient, '!text-[42px]')}>
                Join tacvue
              </h3>
              <p className={cx(subtitle_sm, 'w-[65%] mx-auto mt-8')}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum text of the printing and typesetting
                industry.
              </p>

              <div className='flex justify-center mt-10'>
                <button className='btn_gradient flex items-center gap-2.5'>
                  Connect Wallet{' '}
                  <BsArrowRightShort className='shrink-0' size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Section --End-- */}
      <Footer />
    </div>
  );
};

export default Blueprint;

const Button = React.forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className = '', ...props }, ref) => {
    return (
      <button className={cx('w-fit', className)} ref={ref} {...props}>
        <div className='flex items-center gap-2'>
          <span className={cx(text_gradient, 'font-bold text-lg relative')}>
            Explore More
            <img
              src='/images/gradient_rectangle.svg'
              className='w-full absolute bottom-[-2px] left-0'
              alt=''
            />
          </span>
          <img src='/images/arrow_curvey.svg' alt='arrow_curvey' />
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';
