
import { ICurrency, IDescription, IItem, IItemR } from "utils/interfaces";
import { axiosCurrency, axiosItems, axiosSpecs } from "../instances/axiosInstance";
const LIMIT_ITEMS = 4;
const getItemsList = (query: string) => axiosItems.get(`/search?limit=${LIMIT_ITEMS}&q=${query}`).then(itemsTransform);
const getItemsSpecs = (id: string) => axiosSpecs.get(`/${id}`).then(specsTransform);
const getItemDescription = (id: string) => axiosSpecs.get(`/${id}/description`).then(descriptionTransform);
const getCurrency = (currency: string) => axiosCurrency.get(`/${currency}`).then(currencyTransform);

const itemsTransform = (res: { data: { results: IItem[]; }; }) => {
    //const categories = available_filters.map(({ name: category }) => category)
    const items = res.data.results.map((item: IItem) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.price.currency_id,
                amount: Number(item.price.toString().split('.')[0]),
                decimals: item.price.toString().split('.')[1]
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name,
        }
    });
    const respond = {
        author: { name: '', lastname: '' },
        //categories: categories,
        items: items
    }
    return respond;
};
const specsTransform = (res: IItemR) => {
    const price = res.data.original_price ? res.data.original_price : res.data.price;
    return {
        id: res.data.id,
        title: res.data.title,
        price: {
            currency: res.data.currency_id,
            amount: Number(price.toString().split('.')[0]),
            decimal: price.toString().split('.')[1],
        },
        picture: res.data.pictures[0].secure_url,
        condition: res.data.condition,
        free_shipping: res.data.shipping.free_shipping,
        address: res.data.seller_address.state.name,
        sold_quantity: res.data.sold_quantity,
    };
};
const descriptionTransform = (res: IDescription) => {
    return {
        description: res.data.plain_text
    };
};
const currencyTransform = (res: ICurrency) => {

    return {
        currency: res.data.description,
        decimals: res.data.decimal_places
    };
};

export {
    getItemsList,
    getItemsSpecs,
    getItemDescription,
    getCurrency
} 