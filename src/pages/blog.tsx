import React from 'react';
import { BlogContent } from '../components/index';
import { Layout } from '../molecules/index';

export default function Blog(): JSX.Element {
	return (
		<Layout>
			<BlogContent />
		</Layout>
	);
}
