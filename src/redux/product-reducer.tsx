import {API} from '../api/API';
import {Dispatch} from 'redux';


// export type UsersActionTypes = ReturnType<typeof followSuccess>


//ACTION CREATORS
// export const followSuccess = (userId: number) => {
//     return {
//         type: 'FOLLOW', userId
//     } as const
// }
//
// export const setIsFetching = (fetchingValue: boolean) => {
//     return {
//         type: 'TOGGLE-ISFETCHING', fetchingValue
//     } as const
// }
// export const setFollowingProgress = (userId: number, fetchingValue: boolean) => {
//     return {
//         type: 'TOGGLE-FOLLOWING-PROGRESS', userId, fetchingValue,
//     } as const
// }

//THUNK CREATORS START
// export const getUsers = (currentPage: number, pageSize: number) => {
//     return (dispatch: Dispatch<AppActionTypes>) => { //return thunk
//         dispatch(setIsFetching(true))
//         API.getUsers(currentPage, pageSize)
//             .then(data => {
//                 dispatch(setIsFetching(false))
//                 dispatch(setUsers(data.items))
//                 dispatch(setTotalUsersCount(data.totalCount))
//             })
//     }
// }

// THUNK CREATORS END

// let initialState = {
//     users: [] as Array<UserType>,
//     totalUsersCount: 5,
//     pageSize: 5,
//     currentPage: 1,
//     isFetching: false,
//     followingProgress: [] as Array<Number>
// }
// export type initialStateUsersType = typeof initialState

// state: initialStateUsersType = initialState, action: UsersActionTypes
export const productReducer = (state:any, action: any) => {
    switch (action.type) {
        // case 'FOLLOW':
        //     return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        // case 'UN-FOLLOW':
        //     return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        // case 'SET-USERS':
        //     return {...state, users: action.users}
        // case 'SET-CURRENT-PAGE':
        //     return {...state, currentPage: action.clickedPage}
        // case 'SET-TOTAL-USERS-COUNT':
        //     return {...state, totalUsersCount: action.totalCount}
        // case 'TOGGLE-ISFETCHING':
        //     return {...state, isFetching: action.fetchingValue}
        // case 'TOGGLE-FOLLOWING-PROGRESS':
        //     return {
        //         ...state,
        //         followingProgress: action.fetchingValue ?
        //             [...state.followingProgress, action.userId] // while request add id to array
        //             : state.followingProgress.filter(id => id !== action.userId) // if request ended filter
        //     }
        default:
            return null;
    }
}
