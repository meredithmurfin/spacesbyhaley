import React from 'react';
import { ProductsContent } from '../components/index';
import { Layout } from '../molecules/index';

export default function Products(): JSX.Element {
	return (
		<Layout>
			<ProductsContent />
		</Layout>
	);
}
