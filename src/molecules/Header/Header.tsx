import React from 'react';
import { Layout } from 'antd';
import { IconButton } from '../../atoms/index';
import { RiMenuLine } from 'react-icons/ri';
import logo from '../../assets/sbh-logo.png';
import { Link } from 'gatsby';
import './Header.scss';

const AntHeader = Layout.Header;

const headerSubtitle =
	'Home organization services aiming to make your space more fresh and functional.';

interface HeaderProps {
	handleClick: () => void;
}

export function Header({ handleClick }: HeaderProps): JSX.Element {
	return (
		<>
			<AntHeader className="header-container">
				<div className="header-button-container">
					<IconButton handleClick={handleClick} Icon={RiMenuLine} />
				</div>
				<div className="header-logo-container">
					<Link to="/">
						<img className="home-logo" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="header-space-container"></div>
			</AntHeader>
		</>
	);
}
