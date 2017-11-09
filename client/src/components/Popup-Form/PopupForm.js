import React from 'react'

import './PopupForm.css'

const PopupForm = ({ pwChange, closeWindow, isVisible, header, children, type, resetForm }) => (
  <div className={`disable-bg ${isVisible}`}>
    <div className={`popup ${type}-popup ${isVisible} `}>
      {
        !pwChange &&
        <i
          className="ion-close-round popup-exit-icon"
          onClick={() => {
            closeWindow()
            if (typeof resetForm === 'function') resetForm()
          }}
        />
      }
      <div>
        <header className="form-header">
          <h3>{ header }</h3>
        </header>
        { children }
        <footer className={`${type}-footer`}></footer>
      </div>
    </div>
  </div>
)


export default PopupForm
