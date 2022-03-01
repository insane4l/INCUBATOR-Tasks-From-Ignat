import React, {ReactElement, useState} from 'react'
import { ButtonStyleType } from '../h4/common/c2-SuperButton/SuperButton'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' 
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

export type FilterButtonType = {
    style: ButtonStyleType
    value: FilterType
    title: string
    id: number
}

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

const filterButtons: Array<FilterButtonType> = [
    {style: "dark", value: 'all', title: 'All', id: 1},
    {style: "danger", value: 'high', title: 'High', id: 2},
    {style: "warning", value: 'middle', title: 'Middle', id: 3},
    {style: "success", value: 'low', title: 'Low', id: 4}
]

export type SortOptionsType = 'originalList' | 'fromHighPriority' | 'fromLowPriority'

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs

    return affairs.filter(el => el.priority === filter)
}

export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {

    return affairs.filter(el => el._id !== id)
}

export const sortByPriority = (affairs: Array<AffairType>, currentSortOption: SortOptionsType,
    setNewSortOptionCallback: (newSortOption: SortOptionsType) => void): Array<AffairType> => {

    const priorityValues = { low: 3, middle: 2, high: 1 }

    if (currentSortOption === 'fromHighPriority') {
        setNewSortOptionCallback('fromLowPriority');
        return [...affairs].sort((a, b) => priorityValues[b.priority] - priorityValues[a.priority]);
    } else {
        setNewSortOptionCallback('fromHighPriority');
        return [...affairs].sort((a, b) => priorityValues[a.priority] - priorityValues[b.priority]);
    }
}

function HW2(): ReactElement {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const [currentSortOption, setSortOption] = useState<SortOptionsType>('originalList')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    const sortByPriorityCallback = () => setAffairs(sortByPriority(affairs, currentSortOption, setSortOption))

    return (
        <div>
            <hr/>
            <h3>Homework #2</h3>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                currentFilter={filter}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                sortByPriorityCallback={sortByPriorityCallback}
                filterButtons={filterButtons}
            />

            {/* <hr/> */}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/* <hr/> */}
        </div>
    )
}

export default HW2
