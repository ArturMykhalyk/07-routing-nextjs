import Modal from '@/components/NoteModal/NoteModal';
import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>
            {note.updatedAt ? note.updatedAt : note.createdAt}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
