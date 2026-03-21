import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200/80 bg-white/80 py-3 backdrop-blur-lg backdrop-saturate-150 transition-all duration-300 dark:border-gray-800/80 dark:bg-gray-950/80">
      <SectionContainer>
        <div className="flex items-center justify-between">
          <div>
            <CustomLink href="/" aria-label={headerConfigs.title}>
              <div className="flex items-center gap-2">
                <span className="inline-block h-5 w-1 rounded-full bg-primary-500" />
                <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100">
                  {headerConfigs.title}
                </span>
              </div>
            </CustomLink>
          </div>

          <div className="flex items-center text-base leading-5 sm:gap-1">
            <div className="hidden gap-1 sm:flex">
              {headerConfigs.navLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>

            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
