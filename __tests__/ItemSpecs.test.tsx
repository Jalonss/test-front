import React from 'react'
import { render, screen } from "@testing-library/react";
import ItemSpecs from '../components/Item/ItemSpecs';
import { specsItem } from '../__mocks__/specsItem'

describe("Show Specs", () => {
  test('Show Specs', async () => {
    render(<ItemSpecs specs={specsItem} />)
    await screen.findByRole('item-specs')
  });
});