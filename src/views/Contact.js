import React, { Component } from "react";
import { Input } from "antd";
import Button from "../components/Button/Button";
import axios from "axios";
import injectSheet from "react-jss";
const { TextArea } = Input;

const styles = {
  form: {
    width: 500,
    display: `flex`,
    height: 300,
    flexDirection: `column`,
    justifyContent: `space-around`
    // margin: '0 auto'
  },
  body: {
    height: `100%`,
    width: `100%`,
    display: `flex`,
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    width: 150,
    display: `flex`,
    justifyContent: `space-between`
  }
};

class Contact0 extends Component {
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
    console.log(this.emailTextInput);
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
    let classes = this.props.classes;
    return (
      <div className={classes.body}>
        <div className={classes.form}>
          <dir><span className="h1">Contact</span></dir>
          <div>
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
              onChange={e =>
                this.setState({ messageTextInput: e.target.value })
              }
            />
          </div>
          <div className={classes.buttons}>
            <Button type="primary" onClick={() => this.sendEmail()}>
              Send
            </Button>
            <Button type="secondary">Clean</Button>
          </div>
        </div>
      </div>
    );
  }
}

const Contact = injectSheet(styles)(Contact0);

export default Contact;
