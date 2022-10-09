import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import ItemSpecs from '../../components/Item/ItemSpecs'
import RouteMap from '../../components/Item/RouteMap'
import { useRouter } from 'next/router'
import { getItemsSpecs, transformItemSpecs } from '../../services/Items/items.service'
import { ErrorHandler } from 'components/error'
import { ISpecsItem } from 'utils/interfaces'

const ItemDetails: NextPage = () => {
    const router = useRouter();
    const [specsItem, setSpecsItem] = useState<ISpecsItem>();
    const [showError, setShowError] = useState<boolean>(false)
    const getSpecs = async () => {
        const id = router?.query?.id;
        try {
            const listItems: ISpecsItem = await getItemsSpecs(`${id}`).then(res => transformItemSpecs(res))
            if (!listItems) throw new Error("No se encontraron registros");
            setSpecsItem(listItems)
            setShowError(false);
        } catch (error) {
            setShowError(true);
        }
    };
    useEffect(() => {
        router.query.id && getSpecs();
    }, [router]);
    return (
        <>

            {showError && <ErrorHandler />}
            {!showError && specsItem && <>
                <RouteMap />
                <ItemSpecs specs={specsItem} />
            </>
            }
        </>
    )
}

export default ItemDetails
