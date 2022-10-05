import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from "../../styles/SpecsProduct.module.scss";
import { getItemDescription, getItemsSpecs } from '../../services/Items/items.service';
import { useRouter } from 'next/router';

interface ISpecsItem {
    srcImage: string | undefined;
    price: string;
    description: string;
    stock: string;
    label: string;
}
export default function ItemSpecs() {
    const router = useRouter();
    const [specsItem, setSpecsItem] = useState<any>();
    const [specsItemDescription, setSpecsItemDescription] = useState<any>();
    const getSpecs = () => {
        const id = router?.query?.id;
        getItemsSpecs(`${id}`).then((res: any) => {
            //if (!res.items.length) throw new Error("Not found");
            //const { items } = res;
            console.log('g:', res)
            setSpecsItem(res);
            //console.log('specsItem: ', specsItem)
        }).catch(error => {
            //Todo: show a message error could be modal or notification even a error page
            //alert(`Error: , ${error.message}`)
        })
        getItemDescription(`${id}`).then((res: any) => {
            //if (!res.items.length) throw new Error("Not found");
            //const { items } = res;
            //setSpecsItem(Object.assign(specsItem, { description: res.description }));
            setSpecsItemDescription({ description: res.description });

            console.log('specsItemspecsItemspecsItemspecsItem: ', specsItem)
        }).catch(error => {
            //Todo: show a message error could be modal or notification even a error page
            //alert(`Error: , ${error.message}`)
        })
    };
    useEffect(() => {
        router.query.id && getSpecs();
    }, [router]);
    return (
        <div>
            <div className={styles.card}>
                <div >
                    <div className={styles.productSpecs}>
                        <Image loader={() => specsItem?.picture} src={specsItem?.picture} alt='' width={680} height={680} />
                    </div>
                    <div className={styles.specs}>
                        <p className={styles.descriptionItem}>Descripción del producto</p>
                        <p className={styles.descriptionItem}>{specsItemDescription?.description}</p>
                    </div>
                </div>
                <div className={styles.details}>
                    <span>Vendidos</span>
                    <span><h3>{specsItem?.title}</h3></span>
                    <span>{specsItem?.price.amount}</span>
                    <span><button >Comprar</button></span>
                </div>
               

            </div>
        </div>
    );
}
