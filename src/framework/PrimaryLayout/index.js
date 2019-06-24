import React from 'react';
import { Layout, Menu } from 'antd';
import LeftNav from './LeftNav';
import Breadcrumb from './Breadcrumb';

const { Header, Content, Sider } = Layout;

export default function PrimaryLayout({ location, children }) {
  return <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout className="ant-layout-has-sider">
      <Sider width={200} style={{ background: '#fff' }}>
        <LeftNav path={location.pathname} />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb path={location.pathname} />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}