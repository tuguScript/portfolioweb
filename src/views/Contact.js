import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import { Input } from "antd";
import Button from "../components/Button/Button";
import axios from "axios";
const { TextArea } = Input;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.emailTextInput = null;

    this.setEmailTextInputRef = element => {
      this.emailTextInput = element;
    };
  }
  componentDidMount = () => {
    this.emailTextInput.focus();
    console.log(this.emailTextInput)
  };
  sendEmail() {
    if (
      this.state.emailTextInput === "" &&
      this.state.messageTextInput === ""
    ) {
      return;
    }
    axios
      .post("https://formspree.io/tuguscript@gmail.com", {
        data: {
          email: this.state.emailTextInput,
          message: this.state.messageTextInput
        }
      })
      .then(function(response) {
        console.log(response);
        // form.reset()
      })
      .catch(function(error) {
        console.log(error);
        // form.reset()
      });
  }
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="caption">Email:</div>
        <TextArea
          ref={this.setEmailTextInputRef}
          placeholder="..."
          autosize
          onChange={e => this.setState({ emailTextInput: e.target.value })}
        />
        <div style={{ margin: "24px 0" }} />
        <div className="caption">Text:</div>
        <TextArea
          ref={this.textInput}
          placeholder="..."
          autosize={{ minRows: 2, maxRows: 6 }}
          onChange={e => this.setState({ messageTextInput: e.target.value })}
        />
        <Button type="primary" onClick={() => this.sendEmail()}>
          Send
        </Button>
        <Button type="secondary">Clean</Button>
        <Footer />
      </div>
    );
  }
}
