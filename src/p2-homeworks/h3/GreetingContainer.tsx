import React, {useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
    deleteUser: (userId: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, deleteUser}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isDisplayedGuests, setDisplayGuests] = useState(false)

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        let newName = name.trim()
        setName('')

        if ( !newName ) return setError('Field required')
        if ( /\d/g.test(newName) ) return setError('Numbers are not allowed')
        if ( /[^\w\s-]/g.test(newName) ) return setError('Symbols are not allowed')
        if ( newName.length < 2 ) return setError('Name must contain 2+ characters')
        if ( newName.length > 25 ) return setError('Max name length 25 characters')

        addUserCallback(newName)
        alert(`Hello ${newName} !`)
    }

    const onEnterPressHandler = () => {
        addUser();
    }

    const showGuestsList = () => {
        if (users.length > 0) {
            setDisplayGuests(!isDisplayedGuests)
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            deleteUser={deleteUser}
            error={error}
            totalUsers={users.length}
            onEnterPressHandler={onEnterPressHandler}
            showGuestsList={showGuestsList}
            isDisplayedGuests={isDisplayedGuests}
            users={users}
        />
    )
}

export default GreetingContainer