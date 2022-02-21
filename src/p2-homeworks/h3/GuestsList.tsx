import React from 'react'
import s from './Greeting.module.css'
import { UserType } from './HW3'

type GuestsListPropsType = {users: UserType[]}

const GuestsList: React.FC<GuestsListPropsType> = ( {users} ) => {
        
    return (
        <ul>
            {users.map(el => <li key={el._id}> {el.name} </li>)}
        </ul>
    )
}

export default GuestsList