//React import
import React from 'react'

//Friend Item Import
import Friend from './Friend'

//CSS Import
import "./Friend-List.css"

//Export Component
export default function FriendList( { friends }) {
    return (
        <div className='friend-list'>{
            friends.map(friend => {
                return <Friend key={friend.id} friendName={friend.name}/>
            })
        }
        </div>
    )
}