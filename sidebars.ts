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
        {
          type: 'category',
          label: 'D22 — 2-Channel 4G Dashcam',
          collapsed: false,
          items: [
            'd22/overview',
            'd22/specifications',
            'd22/installation',
            'd22/make-online',
            'd22/test-device',
            'd22/ai-features',
            'd22/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'D12 — 10.1" AI Display (5 Cameras)',
          collapsed: false,
          items: [
            'd12/overview',
            'd12/specifications',
            'd12/installation',
            'd12/make-online',
            'd12/test-device',
            'd12/ai-features',
            'd12/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'A6 — 4G Wi-Fi Dashcam',
          collapsed: false,
          items: [
            'a6/overview',
            'a6/specifications',
            'a6/installation',
            'a6/make-online',
            'a6/test-device',
            'a6/troubleshooting',
          ],
        },
        {
          type: 'doc',
          id: 'video-settings',
          label: 'Video Settings (WD02 / S202 / D10)',
        },
      ],
    },
    {
      type: 'category',
      label: 'GPS Trackers',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'H8',
          collapsed: false,
          items: ['h8/bluetooth-fuel-sensor'],
        },
      ],
    },
  ],
};

export default sidebars;
