//React Imports
import React from 'react'

//Componant import
/* HeadBar */
import Headbar from './Default-Componants/Head-Bar/Headbar'

/* Freiend List */
import FriendList from './Default-Componants/Friends/Friends-list'
import Profile from './Default-Componants/Profile/Profile'


///DEL
/* General Friend Array */
const friendlist_default = [
    {name: "James", id:0},
    {name: "Greg", id:1},
    {name: "Luke", id:2},
    {name: "Harry", id:3},
    {name: "Sashin", id:4},
]

const activeUser = {username: "CameronCS", status: "Online"}

///END DEL

//Exporting Componant
export default function App() {   
    //Returning the componant
    return (
        <>
            <Headbar />
            <FriendList friends={friendlist_default}/>
            <Profile user={activeUser}/>
        </>
    )
}