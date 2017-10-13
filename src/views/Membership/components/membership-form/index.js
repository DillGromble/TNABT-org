import React from 'react'

import './member-form.css'

const MemberForm = ({ closeWindow, isVisible }) => (
  <div className={`disable-bg ${isVisible}`}>
    <div className={`member-form-popup ${isVisible}`}>
      <i className="ion-close-round popup-exit-icon" onClick={ closeWindow } />
    </div>
  </div>
)


export default MemberForm
