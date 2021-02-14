import React, { ReactNode, useState } from 'react';
import { Layout as AntLayout } from 'antd';
import { Footer, Header, SideBar } from '../index';
import './Layout.scss';

interface LayoutProps {
	children: ReactNode;
}

const { Content } = AntLayout;

export function Layout({ children }: LayoutProps): JSX.Element {
	const [sideBarButtonClicked, setSideBarButtonClicked] = useState<boolean>(
		false,
	);
	function handleSideBarButtonClick() {
		sideBarButtonClicked
			? setSideBarButtonClicked(false)
			: setSideBarButtonClicked(true);
	}
	function handleButtonOnSideBarClose() {
		setSideBarButtonClicked(false);
	}
	return (
		<>
			<AntLayout className="layout-container">
				<SideBar
					sideBarButtonClicked={sideBarButtonClicked}
					handleButtonOnSideBarClose={handleButtonOnSideBarClose}
				>
					<Header handleClick={handleSideBarButtonClick} />
					<Content>{children}</Content>
					<Footer />
				</SideBar>
			</AntLayout>
		</>
	);
}
