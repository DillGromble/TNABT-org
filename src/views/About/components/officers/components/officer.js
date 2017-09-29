import React from 'react'

import './officer.css'


const Officer = ({ name, office, school, classes, phone, email, image }) => (
  <div className="officer-component">
    <img
      className="officer-headshot"
      src={image}
      alt={`TNABT ${office}`}
    />
    <hr width="1" size="320" />
    <div className="officer-info">
      <h3 className="officer-name">{name}</h3>
      <h4>{office}</h4>
      <p>{school}</p>
      <p>{classes}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  </div>
)


export default Officer

