import React from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'
import GuestsList from './GuestsList'
import { UserType } from './HW3'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnterPressHandler: () => void
    showGuestsList: () => void
    isDisplayedGuests : boolean
    users: UserType[]
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPressHandler, showGuestsList, isDisplayedGuests, users} ) => {
        
    const inputClass = error ? s.validation_error + ' ' + s.guest__input : s.guest__input

    return (
        <div>
            <div className={s.guest__form}>
                <div>
                    <SuperInputText 
                        value={name}
                        error={error}
                        onEnter={onEnterPressHandler}
                        onChange={setNameCallback}
                        className={inputClass}
                        spanClassName={s.error_message}/>
                </div>
                

                <SuperButton onClick={addUser}>add</SuperButton>
            </div>
            
            
            {/* <div className={}>{}</div> */}
            <div>Total guests count: [{totalUsers}]</div>
            <button onClick={showGuestsList}>Show guests list</button>
            {isDisplayedGuests && <GuestsList users={users}/>}
        </div>
    )
}

export default Greeting