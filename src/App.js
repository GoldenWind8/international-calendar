import React from 'react'
import WeeklyCalendar from './WeeklyCalendar';
import Headbar from './Default-Componants/Head-Bar/Headbar'
import FriendList from './Default-Componants/Friends/Friends-list'
import Profile from './Default-Componants/Profile/Profile'


///DEL and replace with database info
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

export default function App() {
    return (
        <>
            <Headbar />
            <FriendList friends={friendlist_default}/>

            <Profile user={activeUser}/>
            <WeeklyCalendar/>
        </>
    )
}