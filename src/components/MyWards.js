import React, { useState, useEffect, useContext } from "react";
import { Card, Col, Row, Modal, Form, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import AuthContext from "./../context/auth-context.js";

const MyWards = () => {
  const auth = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [wardsList, setWardsList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const addWard = async () => {
    let json = {
      human_readable_name: name,
      contactdata: contact,
      email: email,
      password: password,
    };
    let result = await fetch("/api/wards/create", {
      method: "post",
      body: JSON.stringify(json),
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
    });
    const status = await result.status;
    if (status === 200) {
      setQuery(json);
      setVisible(false);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch("/api/wards", {
        method: "get",
        headers: {
          Authorization: auth.token,
          "Content-Type": "application/json",
        },
      });
      const body = await result.json();
      setWardsList(body);
    };
    fetchdata();
  }, [query, auth.token]);

  return (
    <>
      <div className="mywards__btn-wrapper">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          {" "}
          <PlusCircleOutlined />
          Add Ward
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={addWard}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <Form>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input onChange={(e) => setName(e.target.value)} />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Contact Data"
              name="contact"
              rules={[
                { required: true, message: "Please input your contact data!" },
              ]}
            >
              <Input onChange={(e) => setContact(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <div className="mywards__cards-wrapper">
        <Row gutter={16}>
          {wardsList.map((ward) => {
            return (
              <Col span={8} key={ward.key}>
                <Card title={ward.human_readable_name} bordered={false}>
                  {ward.email}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default MyWards;
