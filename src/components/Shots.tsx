import type {ReactNode} from 'react';

// A row of screenshots that wraps on narrow screens. Used by the device guides.
export function Shots({children}: {children: ReactNode}): ReactNode {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start', margin: '8px 0 24px'}}>
      {children}
    </div>
  );
}

type ShotProps = {src: string; alt: string; width?: number; caption?: ReactNode};

export function Shot({src, alt, width = 240, caption}: ShotProps): ReactNode {
  return (
    <figure style={{margin: 0, maxWidth: width}}>
      <img
        src={src}
        alt={alt}
        style={{width: '100%', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8}}
      />
      {caption && (
        <figcaption style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: 6}}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
