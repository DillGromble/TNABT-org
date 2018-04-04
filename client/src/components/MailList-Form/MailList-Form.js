import React, { Component } from 'react';
// import { findDOMNode } from 'react-dom';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

import './mail-list.css';


export default class MailListForm extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', submitted: false, open: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.name) return ReactTooltip.show(this.refs.name);
    if (!this.state.email) return ReactTooltip.show(this.refs.email);
    return axios.post('/api/mailer/mailinglist', this.state)
      .then(res => {
        this.setState({ name: '', email: '', submitted: true });
        this.props.finishForm();
      })
      .catch(err => console.error(err));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  hideTooltip () {
    setTimeout(ReactTooltip.hide, 3000);
  }

  toggleForm() {
    this.setState({ open: !this.state.open });
  }

  link() {
    return (
      <a onClick={this.toggleForm} className="link" > Click Here to Register </a>
    )
  }

  render() {
    if (!this.state.open) {
      return this.link();
    }
    if (this.state.submitted) {
      return <h3 className="mail_list_thanks">Thank you!</h3>;
    }

    return (
      <form onSubmit={this.handleSubmit} className="mail_list_form">
        <ReactTooltip effect="solid" event="manual" afterShow={this.hideTooltip} />
        <div className="mail_list_input_group">
          <div className="mail_list_input">
            <br />
            <input
              type="text"
              data-tip="Name is required"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              ref="name"
              placeholder="Name"
            />
          </div>
          <div className="mail_list_input">
            <br />
            <input
              type="email"
              data-tip="E-mail is required"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              ref="email"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="mail_list_btn_group">
          <button type="submit" className="btn btn-ghost mail_list_submit">
            Submit
          </button>
          <button type="button" className="btn btn-full mail_list_submit" onClick={this.toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}
