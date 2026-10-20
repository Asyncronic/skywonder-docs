import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

// ── Supported device catalogue, grouped by family ──
// Add a new entry to the correct group when a new device guide is published.

type Device = {
  id: string;
  status: 'available' | 'coming-soon';
  icon: string;
  name: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
};

const dashcams: Device[] = [
  {
    id: 'd9',
    status: 'available',
    icon: '🎥',
    name: 'D9 — Driving Assistance',
    category: 'ADAS + DMS Dashcam',
    description: 'Dual-camera AI dashcam with ADAS (forward collision, lane departure, pedestrian warning) and DMS (fatigue, distraction, phone, smoking, seatbelt). JT/T808, JT/T1078, 4G, GPS.',
    link: '/docs/d9/overview',
    tags: ['JT808', 'JT1078', '4G', 'ADAS', 'DMS'],
  },
  {
    id: 'd22',
    status: 'available',
    icon: '📹',
    name: 'D22 — 2-Channel 4G Dashcam',
    category: '4G Dashcam, optional ADAS + DMS',
    description: 'Compact 2-camera 1080p dashcam with 4G, GPS, Wi-Fi setup and SOS button. Optional AI driver monitoring and road warnings. JT/T808.',
    link: '/docs/d22/overview',
    tags: ['JT808', '4G', 'Wi-Fi', 'ADAS', 'DMS'],
  },
  {
    id: 'd12',
    status: 'available',
    icon: '🖥️',
    name: 'D12 — 10.1" AI Display',
    category: 'Touchscreen MDVR, up to 5 cameras',
    description: '10.1-inch touchscreen that records up to 5 cameras, with 4G, GPS and AI blind-spot detection (BSD), driver monitoring (DMS) and ADAS. Set up on the screen. JT/T808 + JT/T1078.',
    link: '/docs/d12/overview',
    tags: ['JT808', 'JT1078', '4G', 'BSD', 'DMS', 'ADAS'],
  },
  {
    id: 'a6',
    status: 'available',
    icon: '📷',
    name: 'A6 — 4G Wi-Fi Dashcam',
    category: '2-camera dashcam',
    description: 'Front 2K + rear 720P 4G cloud dashcam set up with the Cloud Spirit app. Live video, playback, Sentry Mode and time-lapse parking recording. JT/T808.',
    link: '/docs/a6/overview',
    tags: ['JT808', '4G', 'Wi-Fi', 'Sentry Mode'],
  },
];

const gpsTrackers: Device[] = [
  {
    id: 'h8',
    status: 'available',
    icon: '⛽',
    name: 'H8 — Bluetooth Fuel Sensor',
    category: 'GPS Tracker + Fuel Monitoring',
    description: 'Calibrate the Bluetooth fuel level sensor, link it to the H8 with one command, and see live fuel levels on Traqcare.',
    link: '/docs/h8/bluetooth-fuel-sensor',
    tags: ['JT808', 'Bluetooth', 'Fuel'],
  },
  {
    id: 'gt06',
    status: 'coming-soon',
    icon: '📡',
    name: 'GT06 / GT06N',
    category: 'Wired GPS Tracker',
    description: 'Classic wired GPS tracker — GT06 protocol, immobilizer, ACC detection, SOS, and geofence support.',
    link: '#',
    tags: ['GT06', 'Wired'],
  },
  {
    id: 'jt808',
    status: 'coming-soon',
    icon: '🛰️',
    name: 'JT/T808 Devices',
    category: 'Chinese Standard Trackers',
    description: 'Generic JT/T808 2013/2019 protocol trackers. Covers any device that follows the JT808 national standard.',
    link: '#',
    tags: ['JT808', 'JT1078'],
  },
];

function HeroSection(): ReactNode {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #1976d2 100%)',
      color: '#ffffff',
      padding: '72px 20px 52px',
      textAlign: 'center',
    }}>
      <div style={{maxWidth: '820px', margin: '0 auto'}}>
        <p style={{
          fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          opacity: 0.85, marginBottom: '12px',
        }}>
          Device Installation & Activation Guides
        </p>
        <h1 style={{fontSize: '2.6rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.15}}>
          Skywonder GPS Devices
        </h1>
        <p style={{fontSize: '1.1rem', opacity: 0.92, marginBottom: '28px', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 28px'}}>
          Everything you need to install, configure, and activate supported dashcams and GPS trackers on the <strong>Traqcare platform</strong>.
        </p>
        <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/docs/intro" style={{
            display: 'inline-block', backgroundColor: '#fff', color: '#1565c0',
            padding: '13px 30px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none',
          }}>
            Browse Devices
          </Link>
          <Link to="/docs/d9/overview" style={{
            display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.12)',
            color: '#fff', padding: '13px 30px', borderRadius: '8px', fontWeight: 600,
            fontSize: '1rem', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)',
          }}>
            D9 Quick Start
          </Link>
        </div>
      </div>
    </div>
  );
}

function DeviceCard({d}: {d: Device}): ReactNode {
  const disabled = d.status !== 'available';
  const Wrapper: any = disabled ? 'div' : Link;
  const wrapperProps: any = disabled ? {} : {to: d.link};
  return (
    <Wrapper {...wrapperProps} style={{display: 'block', textDecoration: 'none', color: 'inherit', opacity: disabled ? 0.55 : 1, cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <div style={{
        backgroundColor: 'var(--ifm-card-background-color, #fff)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '12px', padding: '22px', height: '100%',
        transition: 'box-shadow 0.2s ease, transform 0.15s ease',
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
          <div style={{fontSize: '1.8rem'}}>{d.icon}</div>
          {disabled && (
            <span style={{
              fontSize: '0.68rem', padding: '3px 8px', borderRadius: '10px',
              background: 'var(--ifm-color-emphasis-200)', color: 'var(--ifm-color-emphasis-700)',
              fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              Coming soon
            </span>
          )}
        </div>
        <h3 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: 'var(--ifm-color-primary)'}}>{d.name}</h3>
        <div style={{fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-600)', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
          {d.category}
        </div>
        <p style={{fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--ifm-color-emphasis-700)', marginBottom: '12px'}}>
          {d.description}
        </p>
        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
          {d.tags.map(t => (
            <span key={t} style={{
              fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
              background: 'var(--ifm-color-emphasis-100)', color: 'var(--ifm-color-emphasis-700)',
              fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function DeviceSection({title, subtitle, icon, devices}: {title: string; subtitle: string; icon: string; devices: Device[]}): ReactNode {
  return (
    <div style={{marginBottom: '56px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px'}}>
        <span style={{fontSize: '1.6rem'}}>{icon}</span>
        <h2 style={{fontSize: '1.6rem', fontWeight: 700, margin: 0}}>{title}</h2>
      </div>
      <p style={{color: 'var(--ifm-color-emphasis-600)', marginBottom: '24px', fontSize: '0.95rem'}}>
        {subtitle}
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'}}>
        {devices.map(d => <DeviceCard key={d.id} d={d} />)}
      </div>
    </div>
  );
}

function DeviceCatalogue(): ReactNode {
  return (
    <div style={{padding: '56px 20px', maxWidth: '1100px', margin: '0 auto'}}>
      <DeviceSection
        title="Dashcams"
        subtitle="AI dashcams with ADAS and DMS for driver-behaviour monitoring and video evidence."
        icon="🎥"
        devices={dashcams}
      />
      <DeviceSection
        title="GPS Trackers"
        subtitle="Wired and wireless GPS trackers for real-time location, geofencing, and vehicle control."
        icon="📡"
        devices={gpsTrackers}
      />
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Skywonder GPS Devices — Installation & Activation Guides"
      description="Official installation, configuration, and activation guides for Skywonder dashcams and GPS trackers supported by the Traqcare platform.">
      <HeroSection />
      <main>
        <DeviceCatalogue />
      </main>
    </Layout>
  );
}
