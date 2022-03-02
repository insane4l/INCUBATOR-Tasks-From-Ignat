import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const affairCN = `${s.affair__item} ${s[props.affair.priority]}`
    
    return (
        <div className={affairCN}>
            <span className={s.affair__item_name}>{props.affair.name}</span>
            <span className={s.affair__item_priority}> [{props.affair.priority}] </span>

            <SuperButton className={s.affair__item_btn} btnStyle="danger" onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Affair
