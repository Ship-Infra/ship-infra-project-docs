import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        tabs: [
          {
            title: 'Building MVP Infra from Scratch',
            url: '/docs/v1-beginner-infrastructure-as-code/',
          },
          {
            title: 'A Journey to Production-Ready App',
            url: '/docs/v2-production-ready-infrastructure-as-code/',
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
