import React from 'react';
import { HomeContent } from '../components/index';
import { Layout } from '../molecules/index';

export default function Home(): JSX.Element {
	return (
		<Layout>
			<HomeContent />
		</Layout>
	);
}
