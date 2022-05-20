import React from 'react'
import { CheckCircle, ChevronDown, Circle } from 'react-feather'

import * as Styles from './checkout-accordion.styles'

const AccordinContext = React.createContext({
    isOpen: false,
    stepName: '',
    toggle: (currentId: string) => {},
})

interface AccordinProps {
    isOpen: boolean
    toggle: (currentId: string) => void
    stepName: string
    children: React.ReactNode
}

export const Accordin = ({
    isOpen,
    children,
    stepName,
    toggle,
}: AccordinProps) => {
    return (
        <AccordinContext.Provider value={{ isOpen, stepName, toggle }}>
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
    const { isOpen, stepName, toggle } = useAccordinContext()

    return (
        <Styles.Header onClick={() => toggle(stepName)} show={isOpen}>
            <Styles.HeaderContents>
                <Styles.StepIndicator show={isOpen}>
                    {stepName}
                </Styles.StepIndicator>
                <h2>{children}</h2>
            </Styles.HeaderContents>

            <ChevronDown />
        </Styles.Header>
    )
}

export const Contents = ({ children }: { children: React.ReactNode }) => {
    const { isOpen } = useAccordinContext()

    return (
        <Styles.AccordinContents show={isOpen}>
            {children}
        </Styles.AccordinContents>
    )
}

Accordin.Header = Header
Accordin.Contents = Contents
