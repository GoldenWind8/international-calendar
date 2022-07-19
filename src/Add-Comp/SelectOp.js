//Import React
import React from 'react'

//Export Component
export default function SelectOp() {
    let statuses = [
        "Online",
        "Offline",
        "AFK",
        "Do Not Disturb",
        "Invisible"
    ]
    return (
        statuses.map( sts => {
            return <option>{sts}</option>
        })
    )
}

///
//WIP
//