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
      className="group/icon inline-flex items-center justify-center rounded-lg p-2 text-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={clsx(
          'size-5 fill-current text-gray-500 transition-colors duration-200 dark:text-gray-400',
          kind === 'mail' &&
            'group-hover/icon:text-primary-500 dark:group-hover/icon:text-primary-400',
          kind === 'github' &&
            'group-hover/icon:text-gray-900 dark:group-hover/icon:text-gray-100',
          kind === 'facebook' &&
            'group-hover/icon:text-[#4267B2] dark:group-hover/icon:text-[#4267B2]',
          kind === 'linkedin' &&
            'group-hover/icon:text-[#0e76a8] dark:group-hover/icon:text-[#0e76a8]'
        )}
      />
    </a>
  );
};

export default SocialIcon;
