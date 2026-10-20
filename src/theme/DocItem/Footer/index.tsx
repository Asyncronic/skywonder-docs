import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

/** Every guide ends with where to go next, above Docusaurus's own footer (last updated date, pager). */
export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <aside className="dx-help" aria-labelledby="dx-help-title">
        <p id="dx-help-title" className="dx-help__title">Still need help?</p>
        <p>
          Device not coming online? Each device has a <strong>Troubleshooting</strong> page in the sidebar. For the
          Traqcare platform itself (alerts, reports, users), see the{' '}
          <a href="https://docs.traqcare.com/">Traqcare user guide</a>, or{' '}
          <a href="https://docs.traqcare.com/docs/support-and-tickets/">raise a support ticket</a> from the Traqcare app.
        </p>
      </aside>
      <Footer {...props} />
    </>
  );
}
