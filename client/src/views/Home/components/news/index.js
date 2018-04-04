import React from 'react';
import MailListForm from '../../../../components/MailList-Form/MailList-Form';


export default class News extends React.Component {

  constructor() {
    super();
    this.state = { formCompleted: false };
    this.finishForm = this.finishForm.bind(this);
  }

  finishForm() {
    this.setState({ formCompleted: true });
  }

  render() {
    return (
      <section className="section-news" >
        <div className="row" style={{ textAlign: 'center' }}>
          <h2>News</h2>
          <p className="copy">
            The Tennessee Association of Biology Teachers will have their Second
            Annual meeting on April 28th, 2018, with featured speaker: Dr. Neal Lamb.
          </p>
          <br />
          <p className="copy">
            For more information, check the Middle Tennessee events section below.
          </p>
          <br />
          {this.state.showForm || '- or -' }
          <br />
          <br />
          <MailListForm finishForm={this.finishForm} />
        </div>
      </section>
    )
  }
}
