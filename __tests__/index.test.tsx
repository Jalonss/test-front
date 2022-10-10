import React from 'react'
import Layout from "../components/Layout/Layout";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getItemsList, transformItemList } from 'services/Items/items.service'
import { createMocks } from 'node-mocks-http';

describe("Calculator", () => {
  test('Send query for search', async () => {
    render(<Layout />)


  });
});