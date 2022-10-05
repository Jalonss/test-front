export interface IRespondItemsList {

    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: string | number
    },
    picture: string,
    condition: string,
    shipping: { free_shipping: boolean },
    prices: {
        presentation: {
            display_currency: string
        },
        prices: {
            amount: number
        }[]
    }
    currency_id: string,
    thumbnail: string,
    address: { state_name: string }

}
export interface IItem {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: string | number
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    address: string
}
export interface IAuthor {
    name: string;
    lastname: string;
}

export interface IListItems {
    author: IAuthor,
    categories: string[],
    items: IItem[]

}

export interface IResult {
    results: IRespondItemsList[];
    available_filters: INameCategory[];
}
export interface INameCategory {
    name: string;
}
export interface IRespond {
    data: IResult
}