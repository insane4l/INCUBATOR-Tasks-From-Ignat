import React from 'react'
import s from './Greeting.module.css'
import GuestsList from './GuestsList'
import { UserType } from './HW3'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
    showGuestsList: () => void
    isDisplayedGuests : boolean
    users: UserType[]
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, showGuestsList, isDisplayedGuests, users} ) => {
        
    const inputClass = error ? s.validation_error + ' ' + s.guest__input : s.guest__input

    return (
        <div>
            <input value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <div className={s.error_message}>{error}</div>
            <div>Total guests count: [{totalUsers}]</div>
            <button onClick={showGuestsList}>Show guests list</button>
            {isDisplayedGuests && <GuestsList users={users}/>}
        </div>
    )
}

export default Greeting