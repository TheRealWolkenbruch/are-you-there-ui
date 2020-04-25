import React from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Status",
    key: "statuses",
    dataIndex: "status",
    render: (status) => (
      <span>
        {status.map((status) => {
          let color = "green";
          if (status === "expired") {
            color = "red";
          }
          if (status === "pending") {
            color = "grey";
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16, color: "#FF5964" }}>See ward</a>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    email: "test@example.com",
    created_at: "2014-12-24  23:12:00",
    status: ["confirmed"],
  },
  {
    key: "2",
    email: "test@example.com",
    created_at: "2014-12-24  23:12:00",
    status: ["expired"],
  },
  {
    key: "3",
    email: "test@example.com",
    created_at: "2014-12-24  23:12:00",
    status: ["pending"],
  },
];

const BondsTable = () => <Table columns={columns} dataSource={data} />;

export default BondsTable;
