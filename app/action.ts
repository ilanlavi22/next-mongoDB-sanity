// posting data to server
'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from './db';

export async function postEntry(formData: FormData) {
  'use server';
  const data = await prisma.guestbook.create({
    data: {
      message: formData.get('entry') as string,
      username: 'testuser',
    },
  });
  // next revalidate by route
  revalidatePath('/guestbook');
}
