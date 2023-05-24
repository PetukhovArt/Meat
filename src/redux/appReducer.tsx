

//ACTION CREATORS
export const setLoadingStatusAC=(status: RequestStatusType)=> {
    return {type: 'SET-LOADING', status} as const
}

//THUNK CREATORS =======================================================


//STATE =======================================================
const initialState = {
    status: 'idle' as RequestStatusType
}
//Reducer =======================================================
export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'SET-LOADING':
            return {...state, status: action.status}
        default:
            return state
    }
}


//TYPES
export type ActionsAppType = ReturnType<typeof setLoadingStatusAC>
type InitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




