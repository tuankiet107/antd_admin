import { Table, Typography, Image } from 'antd';
import React, { useEffect, useState } from 'react';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      const customersList = data.users.map(item => {
        return {
          key: item.id,
          ...item,
        }
      })
      setCustomers(customersList);
    };
    fetchData();
  }, [])

  return (
    <div>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={customers}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (text) => {
              return <Image 
                src={text}
                width={40}
                height={40}
                style={{borderRadius: "50%"}} 
              />
            }
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: 'address',
            render: (item) => {
              return `${item.address} - ${item.city}`
            }
          }
        ]}
      />  
    </div>
  )
}

export default Customers