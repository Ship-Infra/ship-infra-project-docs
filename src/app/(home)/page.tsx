'use client';

import HeroScreen from '@/components/ui/shadcn-io/hero';
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Navbar01 onCtaClick={() => router.push('/docs')} />
      </div>
      <div style={{ height: 'calc(100vh - 66px)' }}>
        <HeroScreen
          announcementTag='Latest'
          announcementTitle='Introducing Ship Infra Project v1.0'
          announcementUrl='/docs'
          title='Learn Infrastructure by Doing'
          description='Ship Infra Project is an open-source learning series that provides hands-on labs and real-world projects to help you master infrastructure concepts and tools.'
          primaryActionText='Get started'
          primaryActionLink='/docs'
          // secondaryActionText='Learn more'
          // secondaryActionLink='#'
        />
      </div>
    </div>
  );
}
