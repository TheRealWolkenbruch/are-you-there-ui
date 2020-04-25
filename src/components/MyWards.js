import React, { useState, useEffect } from "react";
import { Card, Col, Row, Modal } from "antd";
import data from "./../context/dummyData";

const MyWards = () => {
  const [wardsList, setWardsList] = useState([]);
  const [visible, setVisible] = useState(false);
  const handleOk = (e) => {
    // Post data
    setVisible(false);
  };

  // useEffect is a hook for encapsulating code that has 'side effects,' and is
  // like a combination of componentDidMount , componentDidUpdate
  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch("");
      // const body = await result.json();
      setWardsList(data);
    };
    fetchData();
  });
  return (
    <>
      <div>
        <button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Open Modal
        </button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      <div style={{ background: "#ECECEC", padding: "30px" }}>
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
