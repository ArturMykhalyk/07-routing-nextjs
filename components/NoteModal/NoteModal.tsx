'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import css from './NoteModal.module.css';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = useCallback(() => {
    router.back();
  }, [router]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [close]);

  return (
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
