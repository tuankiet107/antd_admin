import { DashboardOutlined, PicCenterOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const AppSidebar = () => {
  const [currentPath, setCurrentPath] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <div className='AppSidebar'>
      <Menu
        defaultSelectedKeys={[`${currentPath}`]}
        selectedKeys={currentPath}
        items={[
          {
            label: 'Dashboard',
            key: '/',
            icon: <DashboardOutlined />,
            onClick: () => handleClick('/')
          },
          {
            label: 'Inventory',
            key: '/inventory',
            icon: <PicCenterOutlined />,
            onClick: () => handleClick('/inventory')
          },
          {
            label: 'Orders',
            key: '/orders',
            icon: <ShoppingCartOutlined />,
            onClick: () => handleClick('/orders')
          },
          {
            label: 'Customer',
            key: '/customer',
            icon: <UserOutlined />,
            onClick: () => handleClick('/customer')
          }
        ]}
      />
    </div>
  )
}

export default AppSidebar