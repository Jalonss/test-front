import React, { ReactNode } from 'react'

type Props = {
    type?: 'button' | 'submit' | 'reset'
    className: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
}
export default function ButtonAction({
    type = 'button',
    className,
    onClick,
    children
}: Props) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}
