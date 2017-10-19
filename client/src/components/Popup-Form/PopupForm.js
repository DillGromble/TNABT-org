import React from 'react'

import './PopupForm.css'

const PopupForm = ({ closeWindow, isVisible, header, children }) => (
  <div className={`disable-bg ${isVisible}`}>
    <div className={`form-popup ${isVisible}`}>
      <i className="ion-close-round popup-exit-icon" onClick={closeWindow} />
      <div>
        <header className="form-header">
          <h3>{ header }</h3>
        </header>

        { children }

        <footer className="form-footer"></footer>
      </div>
    </div>
  </div>
)


export default PopupForm
