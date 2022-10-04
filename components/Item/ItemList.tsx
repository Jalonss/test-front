import React, { useEffect, useState } from 'react';
//import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from "../../styles/CardProduct.module.scss";
import Shipping from '../Shipping/Shipping';
import { Image } from '../Image';
import { getItemsList } from '../../services/Items/items.service';
import { IItem, IListItems } from '../../utils/interfaces';


export default function ItemList() {
    const router = useRouter();
    const [listItems, setListItems] = useState<IItem[]>();
    const obtenerProductos = () => {
        const query = router?.query?.search;
        getItemsList(`${query}`).then((res: IListItems) => {
            const { items } = res;
            setListItems(items);
        }).catch(error => {
            //Todo: show a message error could be modal or notification even a error page
            console.log(error);
        })
    };
    useEffect(() => {
        router.query.search && obtenerProductos();
    }, [router]);
    return (
        <>
            {
                listItems?.map((i) =>
                    <div key={i.id} className={styles.card}>
                        <Image className={styles.productImage} srcImage={i.picture} />
                        <div className={styles.details}>
                            <div className={styles.price}>
                                <span className={styles.label}>
                                    {`$${i.price.amount.toLocaleString(i.price.currency)}`}
                                </span>
                                <span>
                                    {i.free_shipping && <Shipping />}
                                </span>
                            </div>
                            <div>
                                <span>{i.title}</span>
                            </div>
                            <div>
                                <span>{i.condition}</span>
                            </div>
                        </div>
                        <div>
                            <span>{i.address}</span>
                        </div>
                    </div>
                )
            }
        </>
    );
}

