import React from 'react'

import './open-offices.css'

import OfficeDropdown from './components/office-dropdown'

const dummyOffice = [
  {
  title: 'TNABT Secretary',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus dolor justo, ac tempus nibh viverra fringilla. Integer ultricies odio sed nisl fringilla, ac bibendum erat maximus. Curabitur cursus rhoncus erat ut cursus. Ut aliquam enim non convallis vestibulum. Phasellus sit amet lacus libero. Mauris accumsan, tortor eget dignissim ultricies, mauris metus lacinia est, et hendrerit sem ante nec nunc. Sed enim sem, viverra a diam nec, elementum rutrum nibh. Nullam quam nisl, tempus ut purus feugiat, maximus euismod nisl. Morbi et lacus quis libero congue placerat.'
  },
  {
    title: 'TNABT Treasurer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus dolor justo, ac tempus nibh viverra fringilla. Integer ultricies odio sed nisl fringilla, ac bibendum erat maximus. Curabitur cursus rhoncus erat ut cursus. Ut aliquam enim non convallis vestibulum. Phasellus sit amet lacus libero.'
  }
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
