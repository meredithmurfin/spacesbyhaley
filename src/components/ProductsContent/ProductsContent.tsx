import React from 'react';
import { RiStarLine } from 'react-icons/ri';
import './ProductsContent.scss';

export function ProductsContent(): JSX.Element {
	return (
		<>
			<div className="products-content-container">
				<div className="products-title-container">
					<RiStarLine className="products-icon" />
					<div className="products-title">products</div>
					<RiStarLine className="products-icon" />
				</div>
				<div className="products-coming-soon">Coming Soon</div>
			</div>
		</>
	);
}
