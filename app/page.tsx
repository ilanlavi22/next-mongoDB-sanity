import Image from 'next/image';
import ProfilePic from '@/public/img_5158.jpeg';
export default function Home() {
  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-5 md:space-x-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10'>
          Home
        </h1>
      </div>

      <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <Image
            alt=''
            src={ProfilePic}
            className='rounded-full w-52 h-52 object-cover object-top backdrop-brightness-200'
          />
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            Ilan Lavi
          </h3>
          <p className='text-gray-500 dark:text-gray-300 text-center'>
            Hey my name is Ilan and I am a full-stack developer
          </p>

          <div className='flex space-x-5 pt-6'>
            <a href='' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
              </svg>
            </a>

            <a href='' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
              </svg>
            </a>

            <a href='' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200' />
              </svg>
            </a>

            <a href='' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2'>
          <p>Hi My name is Ilan, I am a Developer. FSD. Web Designer</p>
          <p>
            Full Stack Web developer with over 8 years of experience in
            designing UI responsive and condensed Websites and developing Web
            applications, landing pages and digital publications, using varied
            modern technologies.
          </p>
          <p>
            I am passionate and self-driven person with professional dynamism
            and commitment. I enhance my skills and abilities through training
            opportunities and interesting challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
