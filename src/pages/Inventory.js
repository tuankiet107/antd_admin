import React, { useEffect, useState } from 'react';
import {Typography, Table, Image, Rate} from 'antd';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();;
      const inventoryList = data.products.map(item => {
        return {
          key: item.id,
          ...item,
        }
      })
      setInventory(inventoryList);
    };
    fetchData();
  }, [])

  return (
    <div>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={inventory}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (text) => {
              return <Image
              width={40}
              height={40}
              src={text}
              style={{borderRadius: "50%"}}
              />
            }
          },
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
            title: "Rating",
            dataIndex: "rating",
            render: (text) => {
              return (<Rate value={text} disabled allowHalf />)
            }
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
      />  
    </div>
  )
}

export default Inventory