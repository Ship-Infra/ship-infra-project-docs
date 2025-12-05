import { GitHubStarsButton } from '@/components/ui/shadcn-io/github-stars-button';

export const GithubStars = () => {
  return (
    <div className='flex gap-4'>
      {/* Compact formatting for large numbers */}
      <GitHubStarsButton username='vvasylkovskyi' repo='ship-infra-project' formatted={true} />
    </div>
  );
};
