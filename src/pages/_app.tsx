import '@/styles/globals.css';
import '@/styles/prism-dracula.css';
import '@/styles/prism-plus.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import { siteConfigs } from '@/configs/siteConfigs';

import LayoutWrapper from '../components/LayoutWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        titleTemplate={`%s|${siteConfigs.titleShort}`}
        defaultTitle={siteConfigs.title}
        canonical={siteConfigs.fqdn}
        openGraph={{
          title: siteConfigs.title,
          description: siteConfigs.description,
          url: siteConfigs.fqdn,
          images: [
            {
              url: siteConfigs.bannerUrl,
            },
          ],
          site_name: siteConfigs.title,
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: siteConfigs.logoUrl,
          },
        ]}
      >
        {' '}
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </DefaultSeo>
    </ThemeProvider>
  );
}
