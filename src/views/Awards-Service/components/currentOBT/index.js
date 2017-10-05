import React from 'react'

import './currentOBT.css'

import winnerOBTA from '../../img/Elizabeth-Forrester.jpg'

const CurrentOBT = () => (
  <section className="section-current-OBT">
    <div className="row">
      <h2>This Years OBTA Winner</h2>
      <img className="current-OBT-pic" src={winnerOBTA} alt="Current OBTA Winner" />
      <h3 className="current-OBT-name">Elizabeth Forrester</h3>
      <h4 className="current-OBT-school">Baylor School, Chattanooga, TN</h4>
      <p className="copy current-OBT-bio">
        I received my B.S in Chemistry from the University of Tennessee-
        Chattanooga in 2000 and my Ph.D. in Cancer Biology from Vanderbilt
        University in 2005.  My research focused on understanding the role of
        a growth factor (TGF-beta) in mammary tumor metastasis.  After a move
        from Nashville, TN to Charlotte, NC, I found myself juggling a new
        baby, new city, and a new post-doc position.  At the encouragement of a
        friend, I decided to throw my name on the substitute teacher list at
        a preK-12 independent school.  As fate would have it, a long-term
        substitute was required for an Honors Biology and Honors Chemistry
        teacher.  I thoroughly enjoyed being in the classroom, but I was
        shocked at the discrepancy between science education and the
        scientific profession.  Since day one, I've worked to bridge the gap,
        and carve out opportunities for my students to participate in novel
        scientific research.  I actively collaborate with local academic
        institutions, and many students choose to participate in summer
        research programs across the country.  I aim to run my AP Biology
        class more as a lab meeting, than a lecture. We analyze data,
        interpret figures and students began to formulate their own
        questions. By teaching students how to think rather than what to
        think, we empower them with the confidence they need to succeed
        in science.
      </p>
    </div>
  </section>
)

export default CurrentOBT
