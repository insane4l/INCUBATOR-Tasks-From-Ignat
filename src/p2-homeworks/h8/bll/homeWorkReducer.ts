import { IncomingUsersType } from "../HW8"

export const homeWorkReducer = (state: IncomingUsersType, action: HWReducerActionTypes): IncomingUsersType => {
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a,b) => {
                if (a.name > b.name) return 1 
                if (a.name < b.name) return -1
                return 0
            })
            if (action.payload.dir === 'down') return newState.reverse()
            return newState
        }
        case 'ageFilter': {
            let newState = state.filter(el => el.age >= action.payload.age)
            return newState
        }
        default: return state
    }
}

type HWReducerActionTypes = ReturnType<typeof usersSortedAC> | ReturnType<typeof usersFilteredByAgeAC>

export const usersSortedAC = (dir: 'up' | 'down') => (
    {type: 'sort', payload: {dir}} as const
)
export const usersFilteredByAgeAC = (age: number) => (
    {type: 'ageFilter', payload: {age}} as const
)