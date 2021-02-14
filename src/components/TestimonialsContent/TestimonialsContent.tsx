import React from 'react';
import { RiStarLine } from 'react-icons/ri';
import './TestimonialsContent.scss';

export function TestimonialsContent(): JSX.Element {
	return (
		<>
			<div className="testimonials-content-container">
				<div className="testimonials-title-container">
					<RiStarLine className="testimonials-icon" />
					<div className="testimonials-title">testimonials</div>
					<RiStarLine className="testimonials-icon" />
				</div>
				<div className="testimonials-coming-soon">Coming Soon</div>
			</div>
		</>
	);
}
