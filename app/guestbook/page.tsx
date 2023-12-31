import Form from '../components/Form';
import { prisma } from '../db';

//  get entries
async function getEntries() {
  const data = prisma.guestbook.findMany({
    take: 50,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

// revalidate cache
export const revalidate = 60;

export default async function Guestbook() {
  const data = await getEntries();

  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-5 md:space-x-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10'>
          Guestbook
        </h1>
      </div>
      <div className='w-full'>
        <div className='max-w-[500px] mx-auto mt-8'>
          {/* client component  */}
          <Form />

          <div className='flex flex-col space-y-2'>
            {data?.map((entry) => (
              <div key={entry.id} className='w-full text-sm break-words'>
                {entry.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
