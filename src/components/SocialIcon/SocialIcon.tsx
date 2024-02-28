import clsx from 'clsx';

import Facebook from './facebook.svg';
import Github from './github.svg';
import Linkedin from './linkedin.svg';
import Mail from './mail.svg';

// Icons taken from: https://simpleicons.org/

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const components: { [key: string]: SVGComponent } = {
  mail: Mail as SVGComponent,
  github: Github as SVGComponent,
  facebook: Facebook as SVGComponent,
  linkedin: Linkedin as SVGComponent,
};

type Props = {
  kind: 'mail' | 'github' | 'facebook' | 'linkedin';
  href: string;
};

const SocialIcon = ({ kind, href }: Props) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition-colors hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only bg-black hover:text-primary">{kind}</span>
      <SocialSvg
        className={clsx(
          'size-6 fill-current text-gray-700 transition-colors dark:text-gray-200',
          kind === 'mail' && 'hover:text-primary dark:hover:text-primary-400',
          kind === 'github' && 'hover:text-gray-500 dark:hover:text-gray-400',
          kind === 'facebook' &&
            'hover:text-[#4267B2] dark:hover:text-[#4267B2]',
          kind === 'linkedin' &&
            'hover:text-[#0e76a8] dark:hover:text-[#0e76a8]'
        )}
      />
    </a>
  );
};

export default SocialIcon;
