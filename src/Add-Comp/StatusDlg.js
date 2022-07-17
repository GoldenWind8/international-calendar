//React Import
import React from 'react'


//Return Componant
export default function StatusDlg( { dlgRef, selectRef, btnOCH  } ) {
  return (
    <dialog ref={dlgRef}>
      <label htmlFor='status-select'>Select Online Status</label>
      <br />
      <select name='status-select' ref={selectRef}>
        <option>Online</option>
        <option>Offline</option>
        <option>AFK</option>
        <option>Do Not Disturb</option>
        <option>Invisible</option>
      </select>
      <button onClick={btnOCH} >Confirm</button>
    </dialog>
  )
}