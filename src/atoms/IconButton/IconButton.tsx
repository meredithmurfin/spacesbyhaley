import React from 'react';
import { Button } from 'antd';
import './IconButton.scss';

interface IconButtonProps {
	Icon: any;
	handleClick: () => void;
}

export function IconButton({
	Icon,
	handleClick,
}: IconButtonProps): JSX.Element {
	return (
		<>
			<div onClick={handleClick}>
				<Icon className="button-icon" />
			</div>
		</>
	);
}
