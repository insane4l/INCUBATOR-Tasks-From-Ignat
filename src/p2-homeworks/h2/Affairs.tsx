import React, { ReactElement } from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

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
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
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
            <button onClick={setAllByPriority}>Sort by priority</button>
            {mappedAffairs}

            <button className={setClassList('all') + " " + s.priority_all} onClick={setAll}>All</button>
            <button className={setClassList('high') + " " + s.priority_high} onClick={setHigh}>High</button>
            <button className={setClassList('middle') + " " + s.priority_middle} onClick={setMiddle}>Middle</button>
            <button className={setClassList('low') + " " + s.priority_low} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
