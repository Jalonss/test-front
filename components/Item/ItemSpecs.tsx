import React from 'react';
import Image from 'next/image'
import styles from "../../../styles/ProductDetails.module.scss";

interface IItem {
    srcImage: string;
    price: number;
    description: string;
    stock: string;
    label: string;
    id: string;
}
type props = {
    item: IItem
}
export default function ItemSpecs({ item }: props) {
    return (
        <div>
            <div className={styles.card}>
                <div >
                    <div className={styles.productImage}>
                        <Image loader={() => item.srcImage} src={item.srcImage} alt='' width={680} height={680} />
                    </div>
                    <div className={styles.specs}>
                        <p className={styles.title}>Descripción del producto</p>
                        <p className={styles.label}>{item.label}</p>
                    </div>
                </div>
                <div className={styles.cardDetails}>
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.stock}>{item.stock}</p>
                </div>
                <div>
                    <p className={styles.label}>{item.label}</p>
                </div>
            </div>
        </div>
    );
}

