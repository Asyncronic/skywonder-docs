import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/**
 * Home: pick your device, then jump straight to the step you are on (install, make online, troubleshoot).
 * Photos are real product images; the D12 and H8 use a drawn icon (their photos show a serial label or a person).
 * Add a device here when its guide is published.
 */
type Device = {
  id: string;
  name: string;
  kind: string;
  description: string;
  image?: string;
  icon?: 'screen' | 'sensor';
  links: {label: string; to: string}[];
};

const guide = (id: string) => [
  {label: 'Overview', to: `/docs/${id}/overview/`},
  {label: 'Install', to: `/docs/${id}/installation/`},
  {label: 'Make it online', to: `/docs/${id}/make-online/`},
  {label: 'Troubleshoot', to: `/docs/${id}/troubleshooting/`},
];

const dashcams: Device[] = [
  {
    id: 'd9',
    name: 'D9',
    kind: 'AI dashcam with ADAS and DMS',
    description:
      'Two built-in cameras for the road and the driver, with forward collision, lane departure and pedestrian warnings and driver fatigue, distraction, phone and smoking alerts. 4G, GPS, JT/T 808 and JT/T 1078.',
    image: '/img/devices/d9.jpg',
    links: guide('d9'),
  },
  {
    id: 'd22',
    name: 'D22',
    kind: '2-channel 4G dashcam',
    description:
      'Two 1080p cameras with 4G, GPS, Wi-Fi set-up and an SOS button, with optional AI driver monitoring and road warnings. Listed as WD02 in the Traqcam Connect app.',
    image: '/img/devices/d22.png',
    links: guide('d22'),
  },
  {
    id: 'd12',
    name: 'D12',
    kind: '10.1-inch touchscreen MDVR',
    description:
      'Records up to 5 cameras, with 4G, GPS and AI blind-spot detection, driver monitoring and ADAS. Set up on the screen itself. JT/T 808 and JT/T 1078.',
    icon: 'screen',
    links: guide('d12'),
  },
  {
    id: 'a6',
    name: 'A6',
    kind: '4G cloud dashcam',
    description:
      'Front 2K camera and a rear camera (720P by default, supports 1080P), set up with the Cloud Spirit app. Live video, playback, Sentry Mode and time-lapse parking recording. JT/T 808.',
    image: '/img/devices/a6.jpg',
    links: guide('a6'),
  },
];

const trackers: Device[] = [
  {
    id: 'h8',
    name: 'H8 with Bluetooth fuel sensor',
    kind: 'GPS tracker and fuel level sensor',
    description:
      'Calibrate the Bluetooth fuel level sensor, link it to the H8 with one command and see live fuel levels in Traqcare.',
    icon: 'sensor',
    links: [{label: 'Open the guide', to: '/docs/h8/bluetooth-fuel-sensor/'}],
  },
];

function DeviceIcon({kind}: {kind: 'screen' | 'sensor'}): ReactNode {
  return kind === 'screen' ? (
    <svg viewBox="0 0 96 96" className={styles.icon} aria-hidden="true">
      <rect x="10" y="22" width="76" height="48" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="17" y="29" width="62" height="34" rx="2" fill="currentColor" opacity="0.12" />
      <path d="M38 78h20M48 70v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 96 96" className={styles.icon} aria-hidden="true">
      <rect x="34" y="12" width="28" height="72" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M40 60h16M40 50h16M40 40h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M68 30c5 4 5 12 0 16M74 24c9 8 9 20 0 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function DeviceRow({d}: {d: Device}): ReactNode {
  return (
    <li className={styles.device}>
      <Link to={d.links[0].to} className={styles.media} aria-hidden="true" tabIndex={-1}>
        {d.image ? <img src={d.image} alt="" loading="lazy" className={styles.photo} /> : <DeviceIcon kind={d.icon!} />}
      </Link>
      <div className={styles.body}>
        <h3 className={styles.name}>
          <Link to={d.links[0].to}>{d.name}</Link>
        </h3>
        <p className={styles.kind}>{d.kind}</p>
        <p className={styles.description}>{d.description}</p>
        <ul className={styles.steps} aria-label={`${d.name} guide pages`}>
          {d.links.map((l) => (
            <li key={l.to}>
              <Link to={l.to}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Dashcam, MDVR and GPS Tracker Installation Guides"
      description="Official installation, configuration, and activation guides for Skywonder dashcams and GPS trackers supported by the Traqcare platform.">
      <main className={styles.page}>
        <header className={styles.intro}>
          <h1 className={styles.title}>Device installation guides</h1>
          <p className={styles.lead}>
            Wiring, connecting to the Traqcare platform and fixing common faults, for Skywonder dashcams, MDVRs and
            trackers. Pick your device, then go to the step you are on.
          </p>
        </header>

        <section aria-labelledby="dashcams-title" className={styles.section}>
          <h2 id="dashcams-title" className={styles.sectionTitle}>
            Dashcams and MDVRs
          </h2>
          <ul className={styles.list}>
            {dashcams.map((d) => (
              <DeviceRow key={d.id} d={d} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="trackers-title" className={styles.section}>
          <h2 id="trackers-title" className={styles.sectionTitle}>
            GPS trackers and sensors
          </h2>
          <ul className={styles.list}>
            {trackers.map((d) => (
              <DeviceRow key={d.id} d={d} />
            ))}
          </ul>
          <p className={styles.soon}>Guides for GT06-family wired trackers and other JT/T 808 trackers are on the way.</p>
        </section>

        <section className={styles.platform} aria-labelledby="platform-title">
          <h2 id="platform-title" className={styles.platformTitle}>
            Using the Traqcare platform
          </h2>
          <p>
            Once a device is online, the <a href="https://docs.traqcare.com/">Traqcare user guide</a> covers live
            tracking, alerts, reports and users. Open the web app at{' '}
            <a href="https://track.traqcare.com" target="_blank" rel="noopener">
              track.traqcare.com
            </a>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}
