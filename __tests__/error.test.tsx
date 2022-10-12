import React from 'react'
import { render, screen } from '@testing-library/react'
import { ErrorHandler } from '../components/error'

describe('Errors', () => {
    test('It should render', async () => {
        render(<ErrorHandler />)
        expect(screen.getByRole('error-not-find')).toBeInTheDocument()
    })
})
