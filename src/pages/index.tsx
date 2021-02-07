import React from 'react';
import { Layout } from '../components/index';

export default function Home() {
  return (
    <Layout>
      <main>
        <p>
          Facebook:{' '}
          <a href="https://m.facebook.com/Spaces-by-Haley-105707784852717/">
            @spacesbyhaley
          </a>
        </p>
        <p>
          Instagram:{' '}
          <a href="https://instagram.com/spacesbyhaley?igshid=c9t7e3t17opm/">
            @spacesbyhaley
          </a>
        </p>
        <p>
          Contact:{' '}
          <a href="mailto:haleyledwitch@gmail.com">haleyledwitch@gmail.com</a>
        </p>
      </main>
    </Layout>
  );
}
