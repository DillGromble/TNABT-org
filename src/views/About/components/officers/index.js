import React from 'react'

import './officers.css'

import Officer from './components/officer'

import bob from './img/bob.png'

const officerTest = {
  name: 'Robert Pruitt',
  office: 'Secretary',
  school: 'Montgomery Bell Academy, Nashville',
  classes: 'Biology I and AP Biology',
  phone: '(615) 298-5514  ext: 326',
  email: 'robert.pruitt@montgomerybell.edu',
  image: bob
}


const Officers = () => (
  <section className="section-officers">
    <div className="row">
      <h2>Officers</h2>
      <Officer {...officerTest} />
    </div>
  </section>
)

export default Officers
