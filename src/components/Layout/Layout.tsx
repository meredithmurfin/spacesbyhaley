import React, { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import { Footer, Header, Sider } from '../index';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const { Content } = AntLayout;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <AntLayout className="layout">
        <Sider />
        <AntLayout>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </AntLayout>
      </AntLayout>
    </>
  );
}
