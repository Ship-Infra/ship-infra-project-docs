import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { FC } from 'react';

type SectionCardProps = {
  title: string;
  description: string;
};

export const SectionCard: FC<SectionCardProps> = ({ title, description }) => {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
