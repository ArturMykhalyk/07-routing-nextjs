// app/notes/page.tsx

import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: Props) {
  const initialQuery = '';
  const initialPage = 1;
  const { slug } = await params;
  const tagsNotes = slug[0] === 'All' ? '' : slug[0];
  const initialData = await fetchNotes(initialQuery, initialPage, tagsNotes);

  return (
    <NotesClient
      initialData={initialData}
      initialQuery={initialQuery}
      initialPage={initialPage}
      initialTags={tagsNotes}
    />
  );
}
