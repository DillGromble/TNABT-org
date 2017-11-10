import React from 'react'

import './open-offices.css'

import OfficeDropdown from './components/office-dropdown'

const dummyOffice = [
  {
  title: 'Vice President',
  description: 'The Vice-President shall assume the duties of the President in the President’s absence, and shall work cooperatively with the President in administrating the affairs of the TNABT.  The Vice-President shall be President-Elect.'
  },
  {
    title: 'West TN Liason',
    description: 'One member from West Tennessee who shall serve as the liaison for the organization with teachers in the western part of the state.'
  },
  {
    title: 'East TN Liason',
    description: 'One member from East Tennessee who shall serve as the liaison for the organization with teachers in the easter part of the state.'
  },
  {
    title: 'Middle TN Liason',
    description: 'One member from Middle Tennessee who shall serve as the liaison for the organization with teachers in the central part of the state.'
  },
  {
    title: 'Two-Year College Representative',
    description: 'One member from a two-year college who shall serve as the representative of this group in the organization'
  },
]


const OpenOffices = () => (
  <section className="section-open-offices">
    <div className="row">
      <h2>Open Offices</h2>
      {
        dummyOffice.map(office => (
          <OfficeDropdown key={office.title} {...office} />
        ))
      }
    </div>
  </section>
)

export default OpenOffices
