import React from 'react';
import { Layout } from 'antd';
import {
	RiFacebookBoxLine,
	RiInstagramLine,
	RiMailLine,
	RiMessengerLine,
	RiPinterestLine,
} from 'react-icons/ri';
import './Footer.scss';

const AntFooter = Layout.Footer;

export function Footer(): JSX.Element {
	return (
		<>
			<AntFooter className="footer-container">
				<div className="footer-icon-container">
					<a
						href="https://m.facebook.com/Spaces-by-Haley-105707784852717/"
						target="_blank"
					>
						<RiFacebookBoxLine className="footer-icon footer-facebook" />
					</a>
				</div>
				<div className="footer-icon-container">
					<a
						href="https://pinterest.com/haleyledwitch/_saved/"
						target="_blank"
					>
						<RiPinterestLine className="footer-icon footer-pinterest" />
					</a>
				</div>
				<div className="footer-icon-container">
					<a href="mailto:haleyledwitch@gmail.com" target="_blank">
						<RiMailLine className="footer-icon footer-envelope" />
					</a>
				</div>
				<div className="footer-icon-container">
					<a
						href="https://instagram.com/spacesbyhaley?igshid=c9t7e3t17opm/"
						target="_blank"
					>
						<RiInstagramLine className="footer-icon footer-instagram" />
					</a>
				</div>
				<div className="footer-icon-container">
					<a
						href="https://m.me/Spaces-by-Haley-105707784852717/"
						target="_blank"
					>
						<RiMessengerLine className="footer-icon footer-messenger" />
					</a>
				</div>
			</AntFooter>
		</>
	);
}
