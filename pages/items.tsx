import React from 'react'
import type { NextPage } from 'next'
import ItemList from '../components/Item/ItemList'
import RouteMap from '../components/Item/RouteMap'

const Item: NextPage = () => {
    return (
        <>
            <RouteMap />
            <ItemList />
        </>

    )
}

export default Item
