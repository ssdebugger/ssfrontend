import React from 'react'
import { CheckCircle, ChevronDown, Circle } from 'react-feather'

import * as Styles from './checkout-accordin.styles'

const AccordinContext = React.createContext({
    show: false,
    stepName: '',
    toggle: () => {},
})

interface AccordinProps {
    children: React.ReactNode
    stepName: string
}

export const Accordin = ({ children, stepName }: AccordinProps) => {
    const [show, setShow] = React.useState(false)
    const toggle = React.useCallback(() => setShow((prev) => !prev), [])
    const value = React.useMemo(() => ({ show, stepName, toggle }), [show])

    return (
        <AccordinContext.Provider value={value}>
            {children}
        </AccordinContext.Provider>
    )
}

const useAccordinContext = () => {
    const context = React.useContext(AccordinContext)

    if (!context) {
        throw new Error(
            'Accordin compound component cannot be used out Accordin component'
        )
    }

    return context
}

const Header = ({ children }: { children: string }) => {
    const { show, stepName, toggle } = useAccordinContext()

    return (
        <Styles.Header onClick={toggle} show={show}>
            <Styles.HeaderContents>
                <Styles.StepIndicator show={show}>
                    {stepName}
                </Styles.StepIndicator>
                <h2>{children}</h2>
            </Styles.HeaderContents>

            <ChevronDown />
        </Styles.Header>
    )
}

export const Contents = ({ children }: { children: React.ReactNode }) => {
    const { show } = useAccordinContext()

    return (
        <Styles.AccordinContents show={show}>
            {children}
        </Styles.AccordinContents>
    )
}

Accordin.Header = Header
Accordin.Contents = Contents
