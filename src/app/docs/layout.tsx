import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
