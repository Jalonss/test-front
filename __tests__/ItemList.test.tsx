import React from 'react'
import PageItem from "../pages/items";
import { render, screen } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("List Items", () => {
  test('Search Items on page items', async () => {
    useRouter.mockImplementation(() => ({
      query: { search: 'hojas' },
    }));
    render(<PageItem />)
    expect(screen.getByRole('main-list')).toBeInTheDocument()
    await screen.findByRole('items-list')
    for (let index = 0; index < 4; index++) {
      expect(screen.getByRole(`item-card-${index}`)).toBeInTheDocument()
    }

  });
  test('Not find items', async () => {
    useRouter.mockImplementation(() => ({
      query: { search: 'grkopsgj' },
    }));
    render(<PageItem />)
    expect(screen.getByRole('main-list')).toBeInTheDocument()
    await screen.findByRole('error-not-find')
  });

});