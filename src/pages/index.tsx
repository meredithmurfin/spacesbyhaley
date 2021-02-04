import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>Making spaces more fresh + functional</p>
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
      <a href="mailto:haley@spacesbyhaley.com">haley@spacesbyhaley.com</a>
    </p>
  </main>
);

export default Home;
