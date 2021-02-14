import React from 'react';
import Sidebar from 'react-sidebar';
import { Link } from 'gatsby';
import './SideBar.scss';

interface SideBarProps {
	sideBarButtonClicked: boolean;
	handleButtonOnSideBarClose: () => void;
}

interface SideBarState {
	sideBarOpen: boolean;
}

export class SideBar extends React.Component<SideBarProps, SideBarState> {
	constructor(props: SideBarProps) {
		super(props);
		this.state = {
			sideBarOpen: false,
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	componentWillReceiveProps(prevProps: { sideBarButtonClicked: boolean }) {
		if (
			prevProps.sideBarButtonClicked !== this.props.sideBarButtonClicked
		) {
			this.setState({ sideBarOpen: this.props.sideBarButtonClicked });
		}
	}

	componentDidUpdate() {
		if (!this.state.sideBarOpen) {
			this.props.handleButtonOnSideBarClose();
		}
	}

	onSetSidebarOpen(open: boolean) {
		this.setState({ sideBarOpen: open });
	}

	render() {
		return (
			<>
				<Sidebar
					sidebar={
						<>
							<div className="sidebar-content-container">
								<div className="sidebar-link-item-container">
									<Link
										className="sidebar-link-container"
										to="/"
									>
										HOME
									</Link>
								</div>
								<div className="sidebar-link-item-container">
									<Link
										className="sidebar-link-container"
										to="/about"
									>
										ABOUT
									</Link>
								</div>
								<div className="sidebar-link-item-container">
									<Link
										className="sidebar-link-container"
										to="/blog"
									>
										BLOG
									</Link>
								</div>
								<div className="sidebar-link-item-container">
									<Link
										className="sidebar-link-container"
										to="/products"
									>
										PRODUCTS
									</Link>
								</div>
								<div className="sidebar-link-item-container">
									<Link
										className="sidebar-link-container"
										to="/testimonials"
									>
										TESTIMONIALS
									</Link>
								</div>
							</div>
						</>
					}
					open={this.state.sideBarOpen}
					onSetOpen={this.onSetSidebarOpen}
					styles={{ sidebar: { background: '#2E2727' } }}
				>
					{this.props.children}
				</Sidebar>
			</>
		);
	}
}
