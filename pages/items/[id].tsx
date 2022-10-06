import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import ItemSpecs from '../../components/Item/ItemSpecs'
import RouteMap from '../../components/Item/RouteMap'
import { useRouter } from 'next/router'
import { getCurrency, getItemDescription, getItemsSpecs } from '../../services/Items/items.service'
import { ISpecsItem } from '../../utils/interfaces'

const ItemDetails: NextPage = () => {
    const router = useRouter();
    const [specsItem, setSpecsItem] = useState<ISpecsItem>();
    const getSpecs = () => {
        const id = router?.query?.id;
        Promise.all([
            getItemsSpecs(`${id}`),
            getItemDescription(`${id}`),
        ]).then(([specs, descriptionItem]) => {
            const currency = getCurrency(specs.price.currency)
            setSpecsItem({ ...specs, ...descriptionItem, ...currency });
        });
    };
    useEffect(() => {
        router.query.id && getSpecs();
    }, [router]);
    return (
        <>
            <RouteMap />
            {specsItem && <ItemSpecs specs={specsItem} />}
            {/*<ItemSpecs specs={specsItem}/>*/}
        </>
    )
}

export default ItemDetails
