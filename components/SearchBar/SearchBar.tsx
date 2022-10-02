import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/SearchBar.module.scss'
import LogoHome from '../Logo/LogoHome'
import InputSearch from './InputSearch'

export default function SearchBar() {
    const router = useRouter()
    const handleClick = (e: { preventDefault: () => unknown }) => {
        e.preventDefault()
        router.push(`/`)
    }
    return (
        <div className={styles.topndav}>
            <div className={styles.container}>
                <LogoHome onClick={handleClick} />
                <InputSearch />
            </div>
        </div>
    )
}
