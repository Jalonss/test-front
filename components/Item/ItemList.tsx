import React from 'react';
import styles from "../../styles/CardProduct.module.scss";
import Shipping from '../Shipping/Shipping';
import { Image } from '../Image';
import { IListItem } from 'utils/interfaces';

type Props = {
    onClick: (e: string) => void,
    items: IListItem[]
}
export default function ItemList({ items = [], onClick }: Props) {
    return (
        <>
            {
                items.map((i) =>
                    <div key={i.id}>
                        <div className={styles.card}>
                            <Image className={styles.productImage} srcImage={i.picture} onClick={() => onClick(i.id)} />
                            <div className={styles.details}>
                                <div className={styles.price}>
                                    <span>
                                        {`$${i.price.amount.toLocaleString(i.price.currency)}`}
                                    </span>
                                    <span>
                                        {i.free_shipping && <Shipping />}
                                    </span>
                                </div>
                                <div className={styles.information}>
                                    <span>{i.title}</span>
                                    <span>{i.condition}</span>
                                </div>
                            </div>
                            <div className={styles.sectionAddress}>
                                <span className={styles.address}>{i.address}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

