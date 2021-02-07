import React from 'react';
import { Layout } from '../components/index';

export default function Home() {
  return (
    <Layout>
      <main>
        <p style={{ fontFamily: 'Arial, serif', textAlign: 'center' }}>
          <a href="https://m.facebook.com/Spaces-by-Haley-105707784852717/">
            FACEBOOK
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, serif', textAlign: 'center' }}>
          <a href="https://instagram.com/spacesbyhaley?igshid=c9t7e3t17opm/">
            INSTAGRAM
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, serif', textAlign: 'center' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXEuxM6z_wfwKvPaNxwlu1odorcUsnjRRdDmI5qmUm_-OBrw/viewform">
            INQUIRY FORM
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, serif', textAlign: 'center' }}>
          <a href="mailto:haleyledwitch@gmail.com">EMAIL</a>
        </p>
      </main>
    </Layout>
  );
}
