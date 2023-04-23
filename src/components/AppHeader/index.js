import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { Image, Typography, Drawer, List, Badge } from "antd";
import React, { useEffect, useState } from "react";

const AppHeader = () => {
  const [isShowMail, setIsShowMail] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [mails, setMails] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resMail = await fetch("https://dummyjson.com/comments");
      const dataMail = await resMail.json();
      setMails(dataMail.comments);

      const resNoti = await fetch("https://dummyjson.com/carts/1");
      const dataNoti = await resNoti.json();
      setNotifications(dataNoti.products);
    };
    fetchData();
  }, []);

  const handleMailEvent = () => {
    setIsShowMail(true);
  };

  const handleNotificationEvent = () => {
    setIsShowNotification(true);
  };

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title level={4}>My Dashboard</Typography.Title>
      <div style={{ marginRight: 20 }}>
        <span style={{ marginRight: 10 }}>
          <Badge dot={mails.length ? true : false}>
            <MailOutlined onClick={handleMailEvent} style={{ fontSize: 22 }} />
          </Badge>
        </span>
        <span>
          <Badge count={notifications.length}>
            <BellOutlined
              onClick={handleNotificationEvent}
              style={{ fontSize: 22 }}
            />
          </Badge>
        </span>
      </div>
      <Drawer
        title="Mail"
        placement="right"
        onClose={() => setIsShowMail(false)}
        open={isShowMail}
        // closable={false}
        key="mail_right"
      >
        <List
          dataSource={mails}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text>{item.body}</Typography.Text>
              </List.Item>
            );
          }}
        />
      </Drawer>
      <Drawer
        title="Notification"
        placement="right"
        onClose={() => setIsShowNotification(false)}
        open={isShowNotification}
        // closable={false}
        key="notification_right"
      >
        <List
          dataSource={notifications}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text>{item.title}</Typography.Text>
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
