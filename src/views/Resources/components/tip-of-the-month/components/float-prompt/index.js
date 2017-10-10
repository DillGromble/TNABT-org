import React from 'react'

import './float-prompt.css'

const FloatPrompt = ({ message, btnText, onClick }) => (
  <div className="float-prompt-container boxes">
    <p className="float-prompt-message">{ message }</p>
    <hr className="float-prompt-divider" />
    <button className="btn btn-full float-prompt-btn" onClick={ onClick }>
      { btnText }
    </button>
  </div>
)

export default FloatPrompt
