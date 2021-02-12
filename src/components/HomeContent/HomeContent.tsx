import React, { useEffect, useState } from 'react';
import { RiChat3Line, RiStarSLine } from 'react-icons/ri';
import profilePicture from '../../assets/sbh-profile.jpg';
import './HomeContent.scss';

const textBodyIntroduction =
	"My name is Haley, and I help families accomplish their at-home organization goals. Whether the dream you have is big or small, I'd love to help you take full advantage of the space you call home.";
const textBodyListTitle = 'Some of my services include:';
const textBodyListItem1 =
	"Transforming your space to align with your family's functional needs";
const textBodyListItem2 = 'Helping you accomplish that "dream aesthetic"';
const textBodyListItem3 = 'Assisting with home renovation projects';
const textBodyListItem4 =
	'Working with clients to find and purchase products for organization-specifc upgrades in bathrooms, pantries, closets, and laundry rooms ';
const textBodyListItem5 = '+ more!';
const textBodyConclusion =
	"If you have any questions, please don't hesitate to reach out to me.";
const textBodyInquiryQuestion = 'Interested in scheduling a consultation?';
const textBodyInquiryLinkText = 'Check out my inquiry form';

const useIsSsr = () => {
	const [isSsr, setIsSsr] = useState<boolean>(true);
	useEffect(() => {
		setIsSsr(false);
	}, []);
	return isSsr;
};

export function HomeContent(): JSX.Element {
	const isSsr = useIsSsr();
	if (isSsr) return <div></div>;
	const screenWidth = isSsr ? null : (window as any).innerWidth;

	const smallDevice = screenWidth ? screenWidth < 767 : false;
	const mediumDevice = screenWidth
		? screenWidth >= 768 && screenWidth < 992
		: false;
	const largeDevice = screenWidth ? screenWidth >= 992 : false;

	function profileImage() {
		return (
			<div className="flex-container-1">
				<div className="home-content-image-container">
					<img
						className="home-content-image"
						src={profilePicture}
						alt="profile"
					/>
				</div>
			</div>
		);
	}
	function mainTextBodyContent() {
		if (mediumDevice) {
			return (
				<div className="flex-container-2">
					<div className="text-body-container home-content-text-body-introduction-container">
						<div className="text-body home-content-text-body-introduction">
							{textBodyIntroduction}
						</div>
					</div>
				</div>
			);
		} else if (smallDevice || largeDevice) {
			return (
				<div className="flex-container-2">
					<div className="text-body-container home-content-text-body-introduction-container">
						<div className="text-body home-content-text-body-introduction">
							{textBodyIntroduction}
						</div>
					</div>
					<div className="text-body-container home-content-text-body-list-container">
						<div className="text-body-container home-content-text-body-list-title-container">
							<div className="text-body home-content-text-body-list-title">
								{textBodyListTitle}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem1}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem2}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem3}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem4}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem5}
							</div>
						</div>
					</div>
					<div className="text-body-container home-content-text-body-conclusion-container">
						<div className="text-body home-content-text-body-conclusion">
							{textBodyConclusion}
						</div>
					</div>
				</div>
			);
		}
	}
	function bottomTextBodyContent() {
		if (mediumDevice) {
			return (
				<div className="flex-container-3">
					<div className="text-body-container home-content-text-body-list-container">
						<div className="text-body-container home-content-text-body-list-title-container">
							<div className="text-body home-content-text-body-list-title">
								{textBodyListTitle}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem1}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem2}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem3}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem4}
							</div>
						</div>
						<div className="text-body-container home-content-text-body-list-item-container">
							<div>
								<RiStarSLine className="home-content-text-body-list-icon" />
							</div>
							<div className="text-body home-content-text-body-list-text">
								{' '}
								{textBodyListItem5}
							</div>
						</div>
					</div>
					<div className="text-body-container home-content-text-body-conclusion-container">
						<div className="text-body home-content-text-body-conclusion">
							{textBodyConclusion}
						</div>
					</div>
					<div className="text-body-container home-content-text-body-inquiry-question-container">
						<div className="text-body home-content-text-body-inquiry-question">
							{textBodyInquiryQuestion}
						</div>
					</div>
					<a
						className="text-body-container home-content-text-body-inquiry-item-container"
						href="https://docs.google.com/forms/d/e/1FAIpQLSfXEuxM6z_wfwKvPaNxwlu1odorcUsnjRRdDmI5qmUm_-OBrw/viewform"
						target="_blank"
					>
						{' '}
						<div className="text-body home-content-text-body-inquiry-link-text">
							{textBodyInquiryLinkText}
						</div>
						<RiChat3Line className="home-content-text-body-inquiry-icon" />
					</a>
				</div>
			);
		} else if (smallDevice || largeDevice) {
			return (
				<div className="flex-container-3">
					<div className="text-body-container home-content-text-body-inquiry-question-container">
						<div className="text-body home-content-text-body-inquiry-question">
							{textBodyInquiryQuestion}
						</div>
					</div>
					<a
						className="text-body-container home-content-text-body-inquiry-item-container"
						href="https://docs.google.com/forms/d/e/1FAIpQLSfXEuxM6z_wfwKvPaNxwlu1odorcUsnjRRdDmI5qmUm_-OBrw/viewform"
						target="_blank"
					>
						{' '}
						<div className="text-body home-content-text-body-inquiry-link-text">
							{textBodyInquiryLinkText}
						</div>
						<RiChat3Line className="home-content-text-body-inquiry-icon" />
					</a>
				</div>
			);
		}
	}
	return (
		<>
			<main>
				<div className="home-content-container">
					{profileImage()}
					{mainTextBodyContent()}
					{bottomTextBodyContent()}
				</div>
			</main>
		</>
	);
}
