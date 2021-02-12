import React from 'react';
import { Layout } from 'antd';
import logo from '../../assets/sbh-logo.png';
import './Header.scss';

const AntHeader = Layout.Header;

const headerSubtitle =
	'Home organization services aiming to make your space more fresh and functional.';

export function Header(): JSX.Element {
	return (
		<>
			<AntHeader className="header-container">
				<img className="home-logo" src={logo} alt="logo" />
			</AntHeader>
		</>
	);
}
