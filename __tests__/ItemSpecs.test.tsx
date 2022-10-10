import React from 'react'
import SpecsItem from "../pages/items/[id]";
import { render, screen } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
describe("Show Specs", () => {
  test('Show existing', async () => {
    useRouter.mockImplementation(() => ({
      query: { id: 'MLA673821595' },
    }));
    render(<SpecsItem />)
    await screen.findByRole('item-specs')
  });
  test('Show not existing', async () => {
    useRouter.mockImplementation(() => ({
      query: { id: 'VLA673821595' },
    }));
    render(<SpecsItem />)
    await screen.findByRole('error-not-find')
  });
});