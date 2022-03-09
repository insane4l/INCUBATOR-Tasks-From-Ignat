import React, {createRef, useEffect, useState} from 'react'
import {homeWorkReducer, usersFilteredByAgeAC, usersSortedAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

// export type IncomingUsersType = typeof initialPeople
export type IncomingUsersType = Array<{_id: number, name: string, age: number}>

const initialPeople: IncomingUsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55}
]

function HW8() {
    const [people, setPeople] = useState<IncomingUsersType>(initialPeople)
    const [peopleListHeight, setPeopleListHeight] = useState<string>('')
    const peopleListRef = createRef<HTMLDivElement>()

    useEffect(() => {
        if (peopleListRef.current?.clientHeight) {
            setPeopleListHeight(`${peopleListRef.current?.clientHeight}px`);
        }
    }, [])

    const finalPeople = people.map(p => (
        <div key={p._id} className={s.user__item}>
            <div className={s.user__name}>{p.name}</div>
            <div className={s.user__age}>{p.age}</div>
        </div>
    ))


    const sortUp = () => setPeople( homeWorkReducer(initialPeople, usersSortedAC('up')) )
    const sortDown = () => setPeople( homeWorkReducer(initialPeople, usersSortedAC('down')) )

    const filterByAge18 = () => {
        const newList = homeWorkReducer(initialPeople, usersFilteredByAgeAC(18))
        setPeople(newList)
    }


    const peopleListStyle = peopleListHeight ? {height: peopleListHeight} : {}

    return (
        <div>
            <hr/>
            <section className="hw_section">
                <h3>Homework #8</h3>

                <div ref={peopleListRef} style={peopleListStyle}>
                    {finalPeople}
                </div>
                

                <div className={s.buttons__wrapper}>
                    <SuperButton btnStyle='primary' onClick={sortUp}>Sort up</SuperButton>
                    <SuperButton btnStyle='primary' onClick={sortDown}>Sort down</SuperButton>
                    <SuperButton btnStyle='primary' onClick={filterByAge18}>Filter 18+</SuperButton>
                </div>
                
            </section>
        </div>
    )
}

export default HW8
