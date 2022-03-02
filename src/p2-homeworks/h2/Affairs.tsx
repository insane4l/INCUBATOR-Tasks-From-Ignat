import React, { ReactElement, useState } from 'react'
import Affair from './Affair'
import { AffairPriorityType, AffairType, FilterButtonType, FilterType } from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'

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
            {/* todo: uncomment, after accepting homework */}
            {/* <AffairsForm addNewItem={() => {}}/> */}

            <SuperButton btnStyle="primary" disabled={currentFilter !== 'all'} onClick={sortAllByPriority}>Sort by priority</SuperButton>

            <div className={s.affairs__wrapper}>
                {mappedAffairs}
            </div>

            <div className={s.filter__btns_wrapper}>
                {mappedFilterBtns}
            </div>
            
            {/* <SuperButton upperCase btnStyle="dark" btnSize='medium' className={setClassList('all')} onClick={setAll}>All</SuperButton>
            <SuperButton upperCase btnStyle="danger" btnSize='medium' className={setClassList('high')} onClick={setHigh}>High</SuperButton>
            <SuperButton upperCase btnStyle="warning" btnSize='medium' className={setClassList('middle')} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton upperCase btnStyle="success" btnSize='medium' className={setClassList('low')} onClick={setLow}>Low</SuperButton> */}
        </div>
    )
}

type AffairsFormType = {
    addNewItem: (newItem: AffairType) => void
}

// todo: uncomment, after accepting homework (also create local state with Affairs in HW2 component) (create function addNewItem in HW2)
// const AffairsForm: React.FC<AffairsFormType> = ({addNewItem}) => {

//     const [inputValue, setInputValue] = useState('')
//     const [priorityValue, setPriorityValue] = useState<AffairPriorityType>('low')
//     const [error, setError] = useState('')
//     // @ts-ignore
//     // window.priorityValue = priorityValue
    
//     const onSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setPriorityValue(e.currentTarget.value as AffairPriorityType)
//     }
    
//     const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.currentTarget.value)
//     }

//     const onSubmitBtnClickHandler = () => {
//         setInputValue('')
//         setPriorityValue('low')

//         if (!inputValue.trim()) return setError('Field required')
//         if (inputValue.trim().length < 2) return setError('Name must contain 2+ characters')
//         if (!priorityValue) return setError('Please select priority')

//         addNewItem({_id: 4, name: inputValue, priority: priorityValue})
//         setError('')
//     }

//     const affairPriorityValues: Array<AffairPriorityType> = ['low', 'middle', 'high']
//     const mappedOptions = affairPriorityValues.map(el => <option key={el} value={el}>{el}</option>)

//     return (
//         <div className={s.affairs_form}>
//             <SuperInputText value={inputValue} error={error} onChange={onInputChangeHandler} placeholder="Enter new affairs" />
//             <select value={priorityValue} onChange={onSelectChangeHandler}>
//                 {mappedOptions}
//             </select>
//             <SuperButton onClick={onSubmitBtnClickHandler} btnStyle='primary' className={s.affairs__submit_btn}>add</SuperButton>
//         </div>
//     )
// }

export default Affairs
