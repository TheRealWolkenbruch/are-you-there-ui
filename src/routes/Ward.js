import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import thanks from "./../assets/images/thank_you.png";
const { TextArea } = Input;

const Ward = ({ match }) => {
  const name = match.params.name;
  return (
    <section className="thank_you_wrapper">
      <h1>Thank you {name}. Your Guardian has received your notification.💪🏻</h1>
      <h2>Do you want to send some message to the guardian?</h2>
      <img src={thanks} alt="Logo" />
      <TextArea rows={4} />
      <Button type="primary" size="large" block>
        send message to guardian ✉️
      </Button>
    </section>
  );
};
export default Ward;
