import { Code, Zap, FileText, TrendingUp } from 'lucide-react';

// Section text - Value proposition is entirely in the values array below

const values = [
  {
    icon: Code,
    action: 'Deploy real AWS infrastructure with Terraform',
    outcome: 'Learn by provisioning VPCs, compute, databases, load balancers, secrets',
    why: 'not toy examples.',
  },
  {
    icon: Zap,
    action: 'Optimized for startups and indie teams',
    outcome: 'Infrastructure designed to run MVPs at ~$50–$100/month',
    why: 'without painting you into a corner.',
  },
  {
    icon: FileText,
    action: 'Opinionated, documented, reproducible',
    outcome: 'Not "choose-your-own-adventure" AWS',
    why: 'You follow a clear path that works.',
  },
  {
    icon: TrendingUp,
    action: 'From first deploy to production readiness',
    outcome: 'Start simple, then evolve toward security, compliance, and scale',
    why: "when you're ready.",
  },
];

export function ValueProposition({ sectionClassnames }: { sectionClassnames: string }) {
  return (
    <section className={`py-16 md:py-24 ${sectionClassnames}`}>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-8 md:grid-cols-2'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50'
                >
                  <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>{value.action}</h3>
                  <p className='text-muted-foreground'>
                    {value.outcome} <span className='text-foreground font-medium'>{value.why}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
