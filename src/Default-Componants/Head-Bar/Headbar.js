//React Import
import React from 'react'

//CSS import
import "./Headbar.css"

export default function Headbar() {
  return (
    <div className="header-div">
        <label className='header-lbl left-most'>Calander</label>
        <label className='header-lbl'>Label 2</label>
        <label className='header-lbl'>Label 3</label>
        <label className='header-lbl'>Settings</label>
    </div> 
  )
}
