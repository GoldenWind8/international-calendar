//React Import
import React from 'react'

//CSS import
import "./Friend.css"

export default function Friend( {friendName} ) {
    return (
        <>
        <label className='friend'>{friendName}</label>
        <br />
        </>
    )
}