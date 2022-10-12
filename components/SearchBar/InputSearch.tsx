import React, { useState } from 'react'
import styles from '../../styles/SearchBar.module.scss'
import { useRouter } from 'next/router'
import ButtonIcon from '../Button/ButtonAction'
import InputForm from '../Input/InputSearch'
import isEmty from '../../utils/isEmpty'
import IconSearch from '../Icons/IconSearch'

export default function InputSearch() {
    const router = useRouter()
    const [item, setItem] = useState('')
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        isEmty(item) && router.push(`/items?search=${item}`)
    }
    const handleChange = (e: {
        target: { value: React.SetStateAction<string> }
    }) => setItem(e.target.value)

    return (
        <form onSubmit={handleSubmit} className={styles.searchcontainer}>
            <InputForm
                type="text"
                name="search"
                placeholder="Nunca dejes de buscar"
                className={styles.textsearch}
                handleChange={handleChange}
                role="input-search"
            />
            <ButtonIcon
                type="button"
                className={styles.searchbutton}
                onClick={handleSubmit}
            >
                <IconSearch />
            </ButtonIcon>
        </form>
    )
}
