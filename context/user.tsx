import { createContext, useContext, useReducer, useEffect } from 'react'
import { User } from '@/types/user'

type ActionType = { type: 'ADD'; userDetails: User } | { type: 'DELETE' }

type Dispatch = (action: ActionType) => void

const UserContext = createContext<{ user: User; dispatch: Dispatch }>(undefined)

function userReducer(state: User, action: ActionType) {
    switch (action.type) {
        case 'ADD':
            const UserDetails = action.userDetails

            localStorage.setItem('user', JSON.stringify(UserDetails))

            return UserDetails

        case 'DELETE':
            localStorage.removeItem('user')

            return undefined
    }
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, dispatch] = useReducer(userReducer, undefined)

    const value = { user, dispatch }

    useEffect(() => {
        const localUserDetails: User = JSON.parse(localStorage.getItem('user'))

        if (localUserDetails !== null) {
            dispatch({ type: 'ADD', userDetails: localUserDetails })
        }
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/**
 * Custom hooks for UserProvider
 * */
export const useUser = () => {
    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error('useUser must be used within a CartProvider')
    }

    return context
}

export const useAddUser = () => {
    const { dispatch } = useContext(UserContext)

    if (dispatch === undefined) {
        throw new Error('useAddUser must be used within a CartProvider')
    }

    function add(userDetails: User) {
        dispatch({
            type: 'ADD',
            userDetails: userDetails,
        })
    }

    return add
}

export const useRemoveUser = () => {
    const { dispatch } = useContext(UserContext)

    if (dispatch === undefined) {
        throw new Error('useRemoveUser must be used within a CartProvider')
    }

    function remove() {
        dispatch({ type: 'DELETE' })
    }

    return remove
}
