import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

type Props = {
    children?: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    )
}
