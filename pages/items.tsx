import React, { useEffect, useState } from 'react'
import ItemList from '../components/Item/ItemList'
import RouteMap from '../components/Item/RouteMap'
import { useRouter } from 'next/router'
import { IListItem } from 'utils/interfaces'
import {
    getItemsList,
    transformItemList
} from '../services/Items/items.service'
import { ErrorHandler } from '../components/error'

const Item = () => {
    const router = useRouter()
    const [listItems, setListItems] = useState<IListItem[]>()
    const [showError, setShowError] = useState<boolean>(false)

    const handleItem = (id: string) => router.push(`/items/${id}`)

    useEffect(() => {
        const getItems = async () => {
            const query = router?.query?.search
            try {
                const listItems: IListItem[] = await getItemsList(
                    `${query}`
                ).then((res) => transformItemList(res))
                if (!listItems.length)
                    throw new Error('No se encontraron registros')
                setListItems(listItems)
                setShowError(false)
            } catch (error) {
                setShowError(true)
            }
        }
        router.query.search && getItems()
    }, [router])

    return (
        <>
            <div role={'main-list'}>
                {showError && <ErrorHandler />}
                {!showError && listItems && (
                    <>
                        <RouteMap />
                        <ItemList items={listItems} onClick={handleItem} />
                    </>
                )}
            </div>
        </>
    )
}

export default Item
