import {
  DatabaseOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Card, Col, Row, Space, Statistic, Table, Typography } from "antd";
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/carts/1");
      const data = await res.json();
      data.products.splice(3, data.products.length - 1);
      const orders = data.products.map((item) => {
        return {
          key: item.id,
          ...item,
        };
      });
      setRecentOrders(orders);
    };
    fetchData();
  }, []);

  return (
    <div className="DashboardContainer">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <CardStatistic
          title="Orders"
          total={12345}
          mainColor="#CBFFC9"
          icon={
            <ShoppingCartOutlined
              style={{
                fontSize: 25,
                color: "#358235",
              }}
            />
          }
        />
        <CardStatistic
          title="Inventory"
          total={12345}
          mainColor="#BAB7FF"
          icon={
            <DatabaseOutlined
              style={{
                fontSize: 25,
                color: "#2C20C6",
              }}
            />
          }
        />
        <CardStatistic
          title="Customer"
          total={12345}
          mainColor="#CBFFC9"
          icon={
            <UserOutlined
              style={{
                fontSize: 25,
                color: "#A06CB7",
              }}
            />
          }
        />
        <CardStatistic
          title="Revenue"
          total={12345}
          mainColor="#FFBEB7"
          icon={
            <DollarCircleOutlined
              style={{
                fontSize: 25,
                color: "#D31116",
              }}
            />
          }
        />
      </Space>

      <Row style={{ margin: "16px 0" }}>
        <Col span={12}>
          <div className="RecentOrders">
            <Typography.Title level={5}>Recent Orders</Typography.Title>
            <Table
              pagination={false}
              dataSource={recentOrders}
              columns={[
                {
                  title: "Title",
                  dataIndex: "title",
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
                },
                {
                  title: "Price",
                  dataIndex: "price",
                },
              ]}
            />
          </div>
        </Col>
        <Col span={12}>
          <ChartBar />
        </Col>
      </Row>
    </div>
  );
};

function CardStatistic({ title, total, icon, mainColor }) {
  return (
    <Card
      style={{
        width: 200,
      }}
    >
      <Space direction="horizontal">
        <div
          style={{
            padding: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: mainColor,
            borderRadius: "50%",
          }}
        >
          {icon}
        </div>
        <Statistic title={title} value={total} />
      </Space>
    </Card>
  );
}

function ChartBar() {
  const [labels, setLabels] = useState([]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/carts?limit=10");
      const data = await res.json();
      const userIDList = data.carts.map((item) => {
        return `UserID ${item.userId}`;
      });
      setLabels(userIDList);
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map(() => Math.random() * 10000),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ padding: 10, backgroundColor: "#fff" }}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Dashboard;
