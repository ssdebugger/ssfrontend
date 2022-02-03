import { useEffect } from 'react'
import { createContext, useContext, useReducer } from 'react'

type ActionType = { type: 'LOGIN' } | { type: 'LOGOUT' }
type Dispatch = (action: ActionType) => void

type AuthProps = {
    isLoggedIn: boolean
    userEmail?: boolean
}

const InitialProps = {
    isLoggedIn: false,
    dispatch: () => {},
}

const AuthContext =
    createContext<{ state: AuthProps; dispatch: Dispatch }>(undefined)

function authReducer(state: AuthProps, action: ActionType) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('isLoggedIn', 'true')

            return {
                isLoggedIn: true,
            }

        case 'LOGOUT':
            localStorage.removeItem('isLoggedIn')

            return {
                isLoggedIn: false,
            }
    }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, InitialProps)

    const value = { state, dispatch }

    useEffect(() => {
        const localAuthStatus: AuthProps['isLoggedIn'] = JSON.parse(
            localStorage.getItem('isLoggedIn')
        )

        if (localAuthStatus === true) {
            dispatch({ type: 'LOGIN' })
        }
    }, [])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * @returns boolean
 * */
export const useAuth = () => {
    const { state } = useContext(AuthContext)

    if (state === undefined) {
        throw new Error('useAuth must be used within a CartProvider')
    }

    return state.isLoggedIn
}

/**
 * @returns function
 * */
export const useAuthLogin = () => {
    const { dispatch } = useContext(AuthContext)

    if (dispatch === undefined) {
        throw new Error('useAuthLogin must be used within a CartProvider')
    }

    function login() {
        dispatch({ type: 'LOGIN' })
    }

    return login
}

/**
 * @returns function
 * */
export const useAuthLogout = () => {
    const { dispatch } = useContext(AuthContext)

    if (dispatch === undefined) {
        throw new Error('useAuthLogout must be used within a CartProvider')
    }

    function logout() {
        dispatch({ type: 'LOGOUT' })
    }

    return logout
}
