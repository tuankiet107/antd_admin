import { Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/carts/1');
      const data = await res.json();
      const ordersList = data.products.map(item => {
        return {
          key: item.id,
          ...item,
        }
      })
      setOrders(ordersList);
    };
    fetchData();
  }, [])

  return (
    <div>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={orders}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (text) => {
              return `$${text}`
            }
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            render: (text) => {
              return `$${text}`
            }
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
      />  
    </div>
  )
}

export default Orders