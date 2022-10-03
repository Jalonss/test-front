import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import ItemList from '../components/Item/ItemList'
import RouteMap from '../components/Item/RouteMap'
const objImage = [
    { id: '1tjhn61rsg6h1rds6h8set', srcImage: 'http://http2.mlstatic.com/D_669040-MLA50264421271_062022-I.jpg', price: 1805, description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo', condition: 'New', label: 'Nombre Vende', delevery: false },
    { id: '61the6s1b68r41tgb6s1et', srcImage: 'http://http2.mlstatic.com/D_644503-MLA50031395039_052022-O.jpg', price: 152, description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo', condition: 'New', label: 'Nombre Vende', delevery: true },
    { id: 'gnh84fg591n98dxgf1n98x', srcImage: 'http://http2.mlstatic.com/D_844851-MLA43059003691_082020-I.jpg', price: 1234567890, description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo', condition: 'New', label: 'Nombre Vende', delevery: false },
    { id: '9df81hds81h8sdg9hgdgs9', srcImage: 'http://http2.mlstatic.com/D_696224-MLA45771293900_042021-I.jpg', price: 1234567890, description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo', condition: 'New', label: 'Nombre Vende', delevery: true },
]
const Item: NextPage = () => {
    return (

        <Layout>
            <RouteMap />
            <ItemList products={objImage} />
        </Layout>

    )
}

export default Item
