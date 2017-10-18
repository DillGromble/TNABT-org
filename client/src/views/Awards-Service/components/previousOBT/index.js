import React from 'react'

import './previousOBT.css'


const PreviousOBT = () => (
  <section className="section-prev-OBT">
    <div className="row">
      <h2>Former OBTA Recipients from Tennessee</h2>
      <table className="prev-OBT-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Name</th>
            <th>School</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            prevOBTs.map(person => (
              <tr key={person.year}>
                <td>{person.year}</td>
                <td>{person.name}</td>
                <td>{person.school}</td>
                <td>{person.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </section>
)

const prevOBTs = [
  {
    year: 2017,
    name: 'Elizabeth Forrester',
    school: 'Baylor School',
    city: 'Chattanooga'
  },
  {
    year: 2016,
    name: 'Robert Pruitt',
    school: 'Montgomery Bell Academy',
    city: 'Nashville'
  },
  {
    year: 2013,
    name: 'Rachel Gordon',
    school: 'Pope John Paul II High School',
    city: 'Hendersonville'
  },
  {
    year: 2010,
    name: 'William Stafford',
    school: 'Loudon High School',
    city: 'Loudon'
  },
  {
    year: 2009,
    name: 'Molley Plyler',
    school: 'Chester County High School',
    city: 'Henderson'
  },
  {
    year: 2005,
    name: 'Brenda Royal',
    school: 'Hume-Fogg Academic Magnet High School',
    city: 'Nashville'
  },
]
export default PreviousOBT
