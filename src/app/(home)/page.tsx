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
          announcementUrl='/docs/v1-beginner-infrastructure-as-code/'
          title='Learn Infrastructure by Doing'
          description='A Complete Hands-On Terraform AWS Tutorial Series for Engineers'
          primaryActionText='Open the Tutorials'
          primaryActionLink='/docs/v1-beginner-infrastructure-as-code/'
          // secondaryActionText='Learn more'
          // secondaryActionLink='#'
        />
      </div>
    </div>
  );
}
