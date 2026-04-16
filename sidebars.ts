import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  devicesSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Dashcams',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'D9 — Driving Assistance (ADAS + DMS)',
          collapsed: false,
          items: [
            'd9/overview',
            'd9/specifications',
            'd9/installation',
            'd9/configure-app',
            'd9/make-online',
            'd9/ai-features',
            'd9/commands',
            'd9/firmware-upgrade',
            'd9/troubleshooting',
          ],
        },
      ],
    },
    // GPS Trackers — add a category here when the first tracker guide is published, e.g.:
    // {
    //   type: 'category',
    //   label: 'GPS Trackers',
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'GT06 / GT06N',
    //       items: ['gt06/overview', 'gt06/installation', 'gt06/make-online', 'gt06/commands', 'gt06/troubleshooting'],
    //     },
    //   ],
    // },
  ],
};

export default sidebars;
