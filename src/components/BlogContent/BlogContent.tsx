import React from 'react';
import { RiStarLine } from 'react-icons/ri';
import './BlogContent.scss';

export function BlogContent(): JSX.Element {
	return (
		<>
			<div className="blog-content-container">
				<div className="blog-title-container">
					<RiStarLine className="blog-icon" />
					<div className="blog-title">blog</div>
					<RiStarLine className="blog-icon" />
				</div>
				<div className="blog-coming-soon">Coming Soon</div>
			</div>
		</>
	);
}
