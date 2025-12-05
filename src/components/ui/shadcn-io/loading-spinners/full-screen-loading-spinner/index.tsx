import type { FC } from 'react';
import { Spinner } from '../../spinner';

type FullScreenLoadingSpinnerProps = {
  variant?: 'circle' | 'dots' | 'bars' | 'oval';
  text?: string;
};

export const FullScreenLoadingSpinner: FC<FullScreenLoadingSpinnerProps> = ({ variant, text }) => {
  return (
    <div className='flex flex-1 flex-col h-full'>
      <div className='@container/main flex flex-1 flex-col gap-2'>
        <div className='flex flex-col items-center justify-center gap-4 h-full' key={variant}>
          <Spinner variant='circle' height={64} width={64} />
          {text && <span className='text-muted-foreground text-xl'>{text}</span>}
        </div>
      </div>
    </div>
  );
};
