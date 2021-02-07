import React from 'react';
import { Layout } from 'antd';
import './Header.scss';

const AntHeader = Layout.Header;

export function Header() {
  return (
    <>
      <AntHeader className="header-container">
        <div>
          <span className="header-title">Spaces by Haley</span>
        </div>
        <div>
          <span className="header-description">
            Home organization services aiming to make your space more fresh and
            functional.
          </span>
        </div>
      </AntHeader>
    </>
  );
}
