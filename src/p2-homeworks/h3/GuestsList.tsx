import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'
import { UserType } from './HW3'

type GuestsListPropsType = {
    users: UserType[]
    deleteUser: (userId: string) => void
}

const GuestsList: React.FC<GuestsListPropsType> = ( {users, deleteUser} ) => {

        
    return (
        <ul className={s.guest__list}>
            {users.map(el => (
                <li key={el._id} className={s.guest__list_item}>
                    {el.name} <SuperButton btnStyle="danger" onClick={() => deleteUser(el._id)}> x </SuperButton>
                </li>
            ))}
        </ul>
    )
}

export default GuestsList