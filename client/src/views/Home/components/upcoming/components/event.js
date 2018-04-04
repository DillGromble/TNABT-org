import React from 'react';
import MailListForm from '../../../../../components/MailList-Form/MailList-Form';


class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = { descriptionState: 'hidden' };

    this.toggleEventBody = this.toggleEventBody.bind(this);
    this.renderEventBody = this.renderEventBody.bind(this);
  }

  toggleEventBody() {
    this.setState({
      descriptionState: this.state.descriptionState === 'hidden' ? 'shown' : 'hidden'
    });
  }

  renderEventBody() {
    return { __html: this.props.event.body };
  }

  render() {
    return (
      <div key={this.props.event.title} className="event-wrapper">
        <h4>{this.props.event.host}</h4>
        <h5>{this.props.event.title}</h5>
        <p className="event-location">{this.props.event.location}</p>
        <p className="event-location">{this.props.event.date}</p>
        <a className="event-details-link" onClick={this.toggleEventBody}>
          {this.state.descriptionState === 'hidden' ? 'Click for details' : 'Hide details' }
        </a>
        <p
          className={`${this.state.descriptionState} event-details`}
          dangerouslySetInnerHTML={this.renderEventBody()}
        ></p>
        <div style={{ margin: '15px 0 30px' }}>
          <MailListForm />
        </div>
      </div>
    )
  }
}

export default Event;
