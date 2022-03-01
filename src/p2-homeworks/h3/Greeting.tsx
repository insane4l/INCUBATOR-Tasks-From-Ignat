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
        

    return (
        <div>
            <div className={s.guest__form}>
        
                <SuperInputText
                    placeholder='Enter your name' 
                    value={name}
                    error={error}
                    onEnter={onEnterPressHandler}
                    onChange={setNameCallback}
                    spanClassName={s.error_message}/>
                
                

                <SuperButton className={s.submit_btn} btnStyle="primary" onClick={addUser}>add</SuperButton>
            </div>
            
            
            <div>Total guests count: [{totalUsers}]</div>
            <SuperButton disabled={totalUsers <= 0} btnStyle="dark" onClick={showGuestsList}>
                {isDisplayedGuests ? 'Hide' : 'Show'} guests list
            </SuperButton>
            {isDisplayedGuests && <GuestsList users={users}/>}
        </div>
    )
}


export default Greeting