import React, { useState, useEffect } from "react";
import { Card, Col, Row, Modal, Form, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import data from "./../context/dummyData";

const MyWards = () => {
  const [wardsList, setWardsList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addWard = () => {
    // const result = await fetch("Add wards", POST);
    // const listOfWard = await result.json();
    // setWardsList(listOfWard);
    var today = new Date();
    var date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const dummyData = {
      key: "4",
      name: name,
      email: email,
      created_at: date,
      status: ["pending"],
    };
    data.push(dummyData);
    setVisible(false);
    setWardsList(data);
  };
  // useEffect is a hook for encapsulating code that has 'side effects,' and is
  // like a combination of componentDidMount , componentDidUpdate
  useEffect(() => {
    // const fetchData = async () => {
    //   // const result = await fetch("");
    //   // const body = await result.json();
    //   setWardsList(data);
    // };
    setWardsList(data);
  }, [wardsList]);

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
          </Form>
        </Modal>
      </div>

      <div className="mywards__cards-wrapper">
        <Row gutter={16}>
          {wardsList.map((ward) => {
            return (
              <Col span={8} key={ward.key}>
                <Card title={ward.email} bordered={false}>
                  {ward.status}
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
