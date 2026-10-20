import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Appended to every page title ("D9 — Overview | Skywonder Device Docs"), so keep it short.
  title: 'Skywonder Device Docs',
  tagline: 'Official device documentation for every GPS tracker, dashcam, and ADAS device supported by the Traqcare platform. Install, configure, and bring your device online.',
  favicon: 'img/skywonder-icon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.skywondergps.com',
  baseUrl: '/',
  // Pages are served at /docs/x/; links, canonicals and the sitemap must use the same form (no redirect hop).
  trailingSlash: true,

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

  plugins: [
    [
      require.resolve('./plugins/seo-postbuild.js'),
      {
        siteName: 'Skywonder Device Docs',
        publisher: {'@type': 'Organization', name: 'Skywonder', url: 'https://skywondergps.com', logo: 'https://docs.skywondergps.com/img/skywonder-icon.png'},
        sectionLabels: {
          intro: 'Start here',
          d9: 'D9 AI dashcam',
          d22: 'D22 (WD02) AI dashcam',
          d12: 'D12 10.1-inch touchscreen MDVR',
          a6: 'A6 4G cloud dashcam',
          h8: 'H8 tracker with Bluetooth fuel sensor',
          'video-settings': 'Video settings',
        },
      },
    ],
  ],

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
      {property: 'og:site_name', content: 'Skywonder Device Docs'},
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
            {label: 'D22 4G Dashcam', to: '/docs/d22/overview'},
            {label: 'D12 AI Display', to: '/docs/d12/overview'},
            {label: 'A6 4G Dashcam', to: '/docs/a6/overview'},
          ],
        },
        {
          title: 'GPS Trackers',
          items: [
            {label: 'All Trackers', to: '/docs/intro#-gps-trackers'},
            {label: 'H8 Bluetooth Fuel Sensor', to: '/docs/h8/bluetooth-fuel-sensor'},
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
