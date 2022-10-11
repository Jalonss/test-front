export interface IListItem {
    id: string,
    title: string,
    picture: string,
    condition: string,
    free_shipping: boolean,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    address: string,
}
export interface ISpecsItem {
    id: string,
    title: string,
    picture: string,
    condition: string,
    description: string,
    free_shipping: boolean,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    sold_quantity: number
}