'use client';

import { useRef } from 'react';
import { postEntry } from '../action';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  return (
    <form
      action={async (FormData) => {
        await postEntry(FormData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className=' relative flex items-center text-sm mb-5'
    >
      <input
        className=' pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-gray-800 text-neutral-900 dark:text-neutral-100'
        type='text'
        disabled={pending}
        placeholder='Your message ...'
        name='entry'
        required
      />
      <button
        className='flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 w-16'
        type='submit'
        disabled={pending}
      >
        Send
      </button>
    </form>
  );
}
