import React from 'react'

import './officers.css'

import Officer from './components/officer'

import bob from './img/bob.png'
import sadler from './img/ksadler.jpg'
import alanfear from './img/alafear.jpg'
import cox from './img/Cox.jpg'
// import placeholder from './img/placeholder-headshot.png'

const officersArr = [
  {
    name: 'Kim Sadler',
    office: 'President',
    school: 'Middle Tennessee State University',
    classes: '---------',
    phone: '(615) 904-8283',
    email: 'kim.sadler@mtsu.edu',
    image: sadler
  },
  {
    name: 'Tom Cox',
    office: 'Vice-President',
    school: 'Brentwood Academy',
    classes: 'Biology and AP Biology',
    phone: '615-373-4764  ext: 609',
    email: 'tom_cox@brentwoodacademy.com',
    image: cox
  },
  {
    name: 'Alicja Lanfear',
    office: 'Treasurer',
    school: 'Middle Tennessee State University',
    classes: '---------',
    phone: '(615) 494-7626',
    email: 'alicja.lanfear@mtsu.edu',
    image: alanfear
  },
  {
    name: 'Robert Pruitt',
    office: 'Secretary',
    school: 'Montgomery Bell Academy, Nashville',
    classes: 'Biology I and AP Biology',
    phone: '(615) 298-5514  ext: 326',
    email: 'robert.pruitt@montgomerybell.edu',
    image: bob
  }
]


const Officers = () => (
  <section className="section-officers">
    <div className="row">
      <h2>Officers</h2>
      {
        officersArr.map(officer => (
          <Officer {...officer} key={officer.name} />
        ))
      }
    </div>
  </section>
)

export default Officers
