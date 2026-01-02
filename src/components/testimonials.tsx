import { Quote } from 'lucide-react';
import Image from 'next/image';
// Section text
const SECTION_TITLE = 'Built From Real Experience';
const TESTIMONIAL_TEXT =
  'Ship Infra is built from real Terraform setups used to deploy and run production applications. The tutorials are a cleaned-up, documented version of infrastructure that actually works.';
const AUTHOR_NAME = 'Ship Infra Team';
const AUTHOR_TITLE = 'Production-tested infrastructure';
const LOGO_ALT = 'Ship Infra Logo';

export function Testimonials({ sectionClassnames }: { sectionClassnames: string }) {
  return (
    <section className={`py-16 md:py-24 ${sectionClassnames}`}>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center mb-12'>
            <h2 className='mb-4 text-3xl font-bold md:text-4xl'>{SECTION_TITLE}</h2>
          </div>

          <div className='rounded-lg border border-border bg-card p-8 md:p-12 relative'>
            <Quote className='absolute top-6 left-6 h-8 w-8 text-primary/20' />
            <blockquote className='relative'>
              <p className='text-lg md:text-xl text-foreground leading-relaxed mb-6'>
                {TESTIMONIAL_TEXT}
              </p>
              <footer className='flex items-center gap-4'>
                <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg'>
                  <Image src='/logo.png' alt={LOGO_ALT} width={24} height={24} />
                </div>
                <div>
                  <div className='font-semibold'>{AUTHOR_NAME}</div>
                  <div className='text-sm text-muted-foreground'>{AUTHOR_TITLE}</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
