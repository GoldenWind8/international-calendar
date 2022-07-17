//React Imporst
import React, { useState, useRef } from 'react'

//Import Additional Components
import StatusDlg from '../../Add-Comp/StatusDlg'


//CSS import
import "./profile.css"

//Export Main App
export default function Profile( { user } ) {
    let [status, setStatus] = useState(user.status)

    //References
    const dlgRef = useRef()
    const stsRef = useRef()

    const btnOnClickHandle = () => {
        let opt = stsRef.current.value
        setStatus(opt)
        user.status = status
        dlgRef.current.close()
    }

    const statusClickHandle = () => {
        dlgRef.current.showModal()
    }

    const classNameSts = () => {
        if (status === "Online") {
            return "online"
        }

        if (status === "AFK") {
            return "afk"
        }

        if (status === "Do Not Disturb") {
            return "dnd"
        }

        if (status === "Invisible") {
            status = "Offline"
            return "offline"
        }

        if (status === "Offline") {
            return "offline"
        }
        return "offline"
    }

    return (
            <div className='profile'>

                <StatusDlg btnOCH={btnOnClickHandle} dlgRef={dlgRef} selectRef={stsRef}/>

                <div>
                    <img className='picture' src={process.env.PUBLIC_URL + "/default.png"}/>
                </div>
                <div className='profile-section'>
                    <label>Username {user.username}</label>
                    <br />
                    <label>Status:
                        <span className={classNameSts() + " status"} onClick={statusClickHandle}>{status}</span>
                    </label>
                    <br />
                    <label className='edit-pro'>Edit Profile</label>
                </div>
            </div>
    )
}