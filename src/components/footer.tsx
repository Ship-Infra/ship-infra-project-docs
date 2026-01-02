import { Star } from 'lucide-react';
import Image from 'next/image';

// URLs
const GITHUB_URL = 'https://github.com/Ship-Infra/ship-infra-project';

// Text content
const BRAND_NAME = 'Ship Infra';
const STAR_TEXT = 'Star on GitHub';
const COPYRIGHT_TEXT = 'Open source under MIT License.';
const LOGO_ALT = 'Ship Infra Logo';

export function Footer() {
  return (
    <footer className='border-t border-border py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-center'>
          <div className='flex items-center gap-2'>
            <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg'>
              <Image src='/logo.png' alt={LOGO_ALT} width={24} height={24} />
            </div>
            <span className='font-bold'>{BRAND_NAME}</span>
          </div>

          <div className='flex items-center gap-4'>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors min-h-[44px]'
            >
              <Star className='h-4 w-4' />
              {STAR_TEXT}
            </a>
          </div>
        </div>

        <div className='mt-8 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}. {COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}
