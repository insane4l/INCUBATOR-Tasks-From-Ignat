import React, { ReactElement } from 'react'
import Affair from './Affair'
import { AffairType, FilterButtonType, FilterType } from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = {
    data: Array<AffairType>
    currentFilter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    sortByPriorityCallback: () => void
    filterButtons: Array<FilterButtonType>
}

function Affairs(props: AffairsPropsType): ReactElement {

    const { data, currentFilter, setFilter, deleteAffairCallback, sortByPriorityCallback, filterButtons } = props

    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const mappedFilterBtns = filterButtons.map(el => (
        <SuperButton
            key={el.id}
            upperCase btnStyle={el.style}
            btnSize='medium'
            className={currentFilter === el.value ? s.filter__btn_active : s.filter__btn}
            onClick={() => setFilter(el.value)}>
            {el.title}
        </SuperButton>
    ))

    const sortAllByPriority = () => {
        if (currentFilter === 'all') {
            sortByPriorityCallback()
        }
    }

 
    // function setClassList(filterValue: FilterType) {
    //     return currentFilter === filterValue ? s.filter__btn_active : s.filter__btn
    // }

    return (
        <div>
            <SuperButton btnStyle="primary" disabled={currentFilter !== 'all'} onClick={sortAllByPriority}>Sort by priority</SuperButton>

            {mappedAffairs}

            {mappedFilterBtns}
            {/* <SuperButton upperCase btnStyle="dark" btnSize='medium' className={setClassList('all')} onClick={setAll}>All</SuperButton>
            <SuperButton upperCase btnStyle="danger" btnSize='medium' className={setClassList('high')} onClick={setHigh}>High</SuperButton>
            <SuperButton upperCase btnStyle="warning" btnSize='medium' className={setClassList('middle')} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton upperCase btnStyle="success" btnSize='medium' className={setClassList('low')} onClick={setLow}>Low</SuperButton> */}
        </div>
    )
}


export default Affairs
