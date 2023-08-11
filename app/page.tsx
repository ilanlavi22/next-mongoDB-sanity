import Image from 'next/image';
import ProfilePic from '@/public/profile.jpg';
export default function Home() {
  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-5 md:space-x-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10'>
          About
        </h1>
      </div>

      <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <Image
            alt=''
            src={ProfilePic}
            className='rounded-full w-48 h-48 object-cover object-[50%,35%] backdrop-brightness-200'
          />
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            John Doe
          </h3>
          <p className='text-gray-500 dark:text-gray-300 text-center'>
            Web Designer / Frontend Developer
          </p>

          <div className='flex space-x-5 pt-6'>
            <a href='#' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
              </svg>
            </a>

            <a href='#' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98' />
              </svg>
            </a>

            <a href='#' target='_blank'>
              <div className='flex items-center justify-center w-8 h-8 bg-teal-500 hover:bg-teal-700 rounded-full'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  className='pl-[2px] w-[22px] h-[22px] text-white dark:text-black'
                >
                  <path d='M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200' />
                </svg>
              </div>
            </a>

            <a href='#' target='_blank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-teal-500 hover:text-teal-700'
              >
                <path d='M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20m196 392c20-14.667 35.333-30.667 46-48-21.333 8-39.333 12.667-54 14 20-12 34-29.333 42-52-20 10.667-40 18-60 22-18.667-18.667-42-28-70-28-26.667 0-49 9.333-67 28s-27 40.667-27 66c0 1.333.333 4.667 1 10s1 9.333 1 12c-80-4-144.667-37.333-194-100-9.333 16-14 32-14 48 0 33.333 14.667 59.333 44 78-17.333 0-32-4-44-12v2c0 22.667 7 42.667 21 60s32.333 28 55 32c-10.667 2.667-18.667 4-24 4-8 0-14-.667-18-2 13.333 44 42.667 66 88 66-33.333 26.667-72.667 40-118 40h-22c45.333 28 93.333 42 144 42 81.333 0 146.667-27.667 196-83s74-117.667 74-187v-12' />
              </svg>
            </a>
          </div>
        </div>
        <div className='prose max-w-none prose-lg pt-12 pb-8 dark:prose-invert xl:col-span-2'>
          <p className='font-medium'>
            Hi, My name is John Doe, I am a Web Designer and a Frontend
            Developer.
          </p>
          <p>
            Web developer with over 8 years of experience in designing UI
            responsive and condensed Websites and developing Web applications,
            landing pages and digital publications, using varied modern
            technologies.
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
