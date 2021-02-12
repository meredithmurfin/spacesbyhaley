import React from 'react';
import { Layout } from 'antd';
import './Sider.scss';

const AntSider = Layout.Sider;

export function Sider(): JSX.Element {
	return (
		<>
			<AntSider className="sider" />
		</>
	);
}
