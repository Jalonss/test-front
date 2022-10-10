import React from 'react';
import styles from '../styles/Error.module.scss'
import Image from 'next/image'
import sorry from '../Assets/sorry.png'

export const ErrorHandler = () => {
    return (
        <>
            <div className={styles.container} role={'error-not-find'}>
                <div className={styles.display}>
                    <div className={styles.sorry}>
                        <Image
                            className={styles.sorry}
                            src={sorry}
                            alt="Sorry"
                        />
                    </div>
                    <div className={styles.message}>
                        <span>Lo sentimos, no tenemos lo que buscas</span>
                    </div>
                </div>
            </div>
        </>
    );
}
