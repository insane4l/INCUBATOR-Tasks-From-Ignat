import React, { ReactElement } from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = {
    data: Array<AffairType>
    currentFilter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    sortByPriorityCallback: () => void
}

function Affairs(props: AffairsPropsType): ReactElement {

    const {data, currentFilter, setFilter, deleteAffairCallback, sortByPriorityCallback} = props

    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAllByPriority = () => {
        sortByPriorityCallback()
    }
    const setAll = () => {
        setFilter('all')
    }
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    const setClassList = (filterValue: FilterType) => (currentFilter === filterValue ? s.filter__btn_active : "") + ` ${s.filter__btn} ${s.button}`

    return (
        <div>
            <SuperButton onClick={setAllByPriority}>Sort by priority</SuperButton>

            {mappedAffairs}

            <SuperButton className={setClassList('all') + " " + s.priority_all} onClick={setAll}>All</SuperButton>
            <SuperButton className={setClassList('high') + " " + s.priority_high} onClick={setHigh}>High</SuperButton>
            <SuperButton className={setClassList('middle') + " " + s.priority_middle} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={setClassList('low') + " " + s.priority_low} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
