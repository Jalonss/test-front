import React from 'react'
import { render, screen } from '@testing-library/react'
import { itemList } from '../__mocks__/items'
import ItemList from '../components/Item/ItemList'

describe('List Items', () => {
    test('Search Items on page items', async () => {
        render(<ItemList items={itemList} onClick={() => {}} />)
        await screen.findByRole('items-list')
        for (let index = 0; index < 4; index++) {
            expect(screen.getByRole(`item-card-${index}`)).toBeInTheDocument()
        }
    })
})
