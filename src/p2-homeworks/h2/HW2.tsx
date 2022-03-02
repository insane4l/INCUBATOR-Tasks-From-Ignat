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
    {_id: 1, name: 'React.js', priority: 'high'},
    {_id: 2, name: 'Anime', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
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
            <section className="hw_section">
                <h3>Homework #2</h3>

                <Affairs
                    data={filteredAffairs}
                    currentFilter={filter}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    sortByPriorityCallback={sortByPriorityCallback}
                    filterButtons={filterButtons} />

            </section>
        </div>
    )
}

export default HW2
