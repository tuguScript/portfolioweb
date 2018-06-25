import React from "react";
import Footer from "../components/Footer/Footer";
import { Input } from "antd";
import Button from '../components/Button/Button'
const { TextArea } = Input;

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="caption">Email:</div>
      <TextArea placeholder="..." autosize />
      <div style={{ margin: "24px 0" }} />
      <div className="caption">Text:</div>
      <TextArea placeholder="..." autosize={{ minRows: 2, maxRows: 6 }} />
      <Button type="primary">Send</Button>
      <Button type="secondary">Clean</Button>
      <Footer />
    </div>
  );
};

export default Contact;
