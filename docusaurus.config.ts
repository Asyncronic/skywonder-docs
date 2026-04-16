import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skywonder GPS Devices — Installation, Configuration & Activation Guide',
  tagline: 'Official device documentation for every GPS tracker, dashcam, and ADAS device supported by the Traqcare platform. Install, configure, and bring your device online.',
  favicon: 'img/skywonder-icon.png',

  future: {
    v4: true,
  },

  url: 'https://devices.traqcare.com',
  baseUrl: '/',

  organizationName: 'skywonder',
  projectName: 'skywonder-devices-docs',

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
      },
    ],
  ],

  plugins: [],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly' as const,
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/skywonder-icon.png',
    metadata: [
      {name: 'description', content: 'Official device documentation for Skywonder GPS trackers, dashcams, and ADAS devices supported on the Traqcare platform. Hardware specs, wiring, configuration, platform onboarding, and SMS/GPRS command references.'},
      {name: 'robots', content: 'index, follow'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Skywonder Devices Documentation'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Skywonder Docs',
      logo: {
        alt: 'Skywonder GPS Devices',
        src: 'img/skywonder-icon.png',
        href: '/',
        width: 32,
        height: 32,
        style: {borderRadius: '6px'},
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'devicesSidebar',
          position: 'left',
          label: 'Devices',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://docs.traqcare.com',
          label: 'Platform Docs',
          position: 'right',
        },
        {
          href: 'https://track.traqcare.com',
          label: 'Open App',
          position: 'right',
          className: 'navbar-app-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dashcams',
          items: [
            {label: 'All Dashcams', to: '/docs/intro#-dashcams'},
            {label: 'D9 Driving Assistance', to: '/docs/d9/overview'},
          ],
        },
        {
          title: 'GPS Trackers',
          items: [
            {label: 'All Trackers', to: '/docs/intro#-gps-trackers'},
          ],
        },
        {
          title: 'Platform',
          items: [
            {label: 'Traqcare Web App', href: 'https://track.traqcare.com'},
            {label: 'Platform Docs', href: 'https://docs.traqcare.com'},
          ],
        },
        {
          title: 'Company',
          items: [
            {label: 'Skywonder GPS', href: 'https://skywondergps.com'},
            {label: 'Support', href: 'https://track.traqcare.com/ticket'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skywonder GPS. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
