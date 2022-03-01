import React, {ReactElement, useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' 
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
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
            />

            {/* <hr/> */}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/* <hr/> */}
        </div>
    )
}

export default HW2
