import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
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

            <SuperButton btnStyle="danger" onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Affair
