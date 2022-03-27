const initState = {
    isLoading: false
}

type InitialStateType = typeof initState
type LoadingReducerActionTypes = LoadingActionType 

export const loadingReducer = (state: InitialStateType = initState, action: LoadingReducerActionTypes): InitialStateType => { // fix any
    switch (action.type) {
        case 'hw/loading/SET_ISLOADING': {
            return {
                ...state,
                isLoading: action.payload.status
            }
        }
        default: return state
    }
}


export const loadingAC = (status: boolean) => (
    {type: 'hw/loading/SET_ISLOADING', payload: {status}} as const
)

type LoadingActionType = ReturnType<typeof loadingAC>
