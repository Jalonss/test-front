import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Logo.module.scss'
import logo from '../../Assets/Logo_ML.png'

type Props = {
    onClick: (e: { preventDefault: () => unknown }) => void
}

export default function Logo({ onClick }: Props) {
    return (
        <Image
            className={styles.Logo}
            src={logo}
            alt="Mercado Libre"
            onClick={onClick}
        />
    )
}
