import React from 'react';
//import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from "../../styles/CardProduct.module.scss";
import shipping from '../../Assets/ic_shipping.png'
import Shipping from '../Shipping/Shipping';
import { Image } from '../Image';
interface IProducDetails {
    srcImage: string;
    price: number;
    description: string;
    condition: string;
    label: string;
    id: string;
    delevery: boolean;
}
interface IProduct {
    products: IProducDetails[];
}

export default function ItemList({ products }: IProduct) {
    const router = useRouter();
    const handleDetails = () => router.push('/items/4')
    return (
        <>
            {
                products.map(({ id, srcImage, price, description, condition, label, delevery }: IProducDetails) =>
                    <div key={id} className={styles.card}>
                        <Image className={styles.productImage} srcImage={srcImage} />
                        <div className={styles.details}>
                            <div className={styles.price}>
                                <span className={styles.label}>
                                    {`$${price.toLocaleString('us-EN')}`}
                                </span>
                                <span>
                                    {delevery && <Shipping/>}
                                </span>
                            </div>
                            <div>
                                <span>{description}</span>
                            </div>
                            <div>
                                <span>{condition}</span>
                            </div>
                        </div>
                        <div>
                            <span>{label}</span>
                        </div>
                    </div>
                )
            }
        </>
    );
}

