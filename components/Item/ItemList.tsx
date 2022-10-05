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

    const getItems = () => {
        const query = router?.query?.search;
        getItemsList(`${query}`).then((res: IListItems) => {
            if (!res.items.length) throw new Error("Not found");
            const { items } = res;
            setListItems(items);
        }).catch(error => {
            //Todo: show a message error could be modal or notification even a error page
            alert(`Error: , ${error.message}`)
        })
    };
    useEffect(() => {
        router.query.search && getItems();
    }, [router]);
    const handleItem = (id: string) => router.push(`/items/${id}`);
    
    return (
        <>
            {
                listItems?.map((i) =>
                    <div key={i.id}>
                        <div className={styles.card}>
                            <Image className={styles.productImage} srcImage={i.picture} onClick={() => handleItem(i.id)} />
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

