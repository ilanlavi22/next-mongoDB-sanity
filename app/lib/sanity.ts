import { createClient } from 'next-sanity';

const projectId = 'zl89kwbg';
const dataset = 'production';
const apiVersion = '2023-01-21';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
