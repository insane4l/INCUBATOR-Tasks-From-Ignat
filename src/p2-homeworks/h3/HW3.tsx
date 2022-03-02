import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from 'uuid';

// types
export type UserType = {
    _id: string 
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, {_id: v1(), name}])
    }

    const deleteUser = (userId: string) => {
        const newUsersList =  users.filter(el => el._id !== userId)
        setUsers(newUsersList)
    }

    return (
        <div>
            <hr/>
            <section className="hw_section">

                <h3>Homework #3</h3>

                <GreetingContainer users={users} addUserCallback={addUserCallback} deleteUser={deleteUser} />

            </section>
        </div>
    )
}

export default HW3