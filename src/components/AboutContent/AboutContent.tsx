import React from 'react';
import { RiStarLine } from 'react-icons/ri';
import './AboutContent.scss';

export function AboutContent(): JSX.Element {
	return (
		<>
			<div className="about-content-container">
				<div className="about-title-container">
					<RiStarLine className="about-icon" />
					<div className="about-title">about</div>
					<RiStarLine className="about-icon" />
				</div>
				<div className="about-coming-soon">Coming Soon</div>
			</div>
		</>
	);
}
