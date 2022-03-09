import React from 'react'
import { IncomingUsersType } from '../../HW8'
import {homeWorkReducer, usersFilteredByAgeAC, usersSortedAC} from '../homeWorkReducer'

let initialState: IncomingUsersType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55}
    ]
})



test('names must be sorted by alphabet', () => {
    const newState = homeWorkReducer(initialState, usersSortedAC('up'))

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
})


test('names must be sorted by reverse alphabet', () => {
    const newState = homeWorkReducer(initialState, usersSortedAC('down'))

    expect(newState[0].name).toBe('Кот')
    expect(newState[5].name).toBe('Александр')
})


test('users must be filtered by age', () => {
    const newState = homeWorkReducer(initialState, usersFilteredByAgeAC(44))

    expect(newState.length).toBe(3)
})
