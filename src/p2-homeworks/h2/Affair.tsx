import React from 'react'
import { AffairType } from './HW2'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    
    return (
        <div>
            <span>{props.affair.name}</span>
            <span> [{props.affair.priority}] </span>

            <button onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
