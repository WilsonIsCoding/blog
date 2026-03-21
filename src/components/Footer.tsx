import SocialIcon from '@/components/SocialIcon';
import { footerConfigs } from '@/configs/footerConfigs';

import CustomLink from './CustomLink';

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="border-t border-gray-200/80 transition-colors dark:border-gray-800/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center py-10">
          <div className="mb-4 flex space-x-5">
            <SocialIcon
              kind="mail"
              href={`mailto:${footerConfigs.socialLinks.email}`}
            />
            <SocialIcon kind="github" href={footerConfigs.socialLinks.github} />
            <SocialIcon
              kind="facebook"
              href={footerConfigs.socialLinks.facebook}
            />
            <SocialIcon
              kind="linkedin"
              href={footerConfigs.socialLinks.linkedin}
            />
          </div>
          <div className="flex space-x-1.5 text-xs text-gray-400 transition-colors dark:text-gray-600">
            <span>{`Copyright © 2024${
              new Date().getFullYear() !== 2024
                ? '-' + String(new Date().getFullYear())
                : ''
            }`}</span>
            <span>·</span>
            <CustomLink
              href="/"
              className="transition-colors hover:text-gray-600 dark:hover:text-gray-400"
            >
              {footerConfigs.credit}
            </CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
