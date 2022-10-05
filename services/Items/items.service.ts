import { IItem, IListItems, IRespond, IRespondItemsList } from "../../utils/interfaces";
import { axiosItems, axiosSpecs } from "../instances/axiosInstance";

const getItemsList = (query: string): Promise<IListItems> => axiosItems.get(`/search?limit=4&q=${query}`).then(itemsTransform);
const getItemsSpecs = (id: string): Promise<IRespondItemsList> => axiosSpecs.get(`/${id}`).then(specsTransform);
const getItemDescription = (id: string): Promise<any> => axiosSpecs.get(`/${id}/description`).then(descriptionTransform);

const itemsTransform = (respond: IRespond): IListItems => {
    const { data } = respond;
    const { results, available_filters } = data;
    const categories = available_filters.map(({ name: category }) => category)
    const items = results.map(({ id, title, prices, currency_id, thumbnail, condition, shipping, address }: IRespondItemsList) => {
        return {
            id: id,
            title: title,
            price: {
                currency: prices.presentation.display_currency,
                amount: prices.prices[0].amount,
                decimals: currency_id
            },
            picture: thumbnail,
            condition: condition,
            free_shipping: shipping.free_shipping,
            address: address.state_name,
        }
    });
    return {
        author: { name: '', lastname: '' },
        categories: categories,
        items: items
    };
};
const specsTransform = (respond: any): any => {
    const { data } = respond;
    return {
        id: data.id,
        title: data.title,
        price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: data.currency_id
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        address: data.seller_address.state.name,
    };
};
const descriptionTransform = (respond: any): any => {
    const { data } = respond;
    return {
        description: data.plain_text
    };
};

export {
    getItemsList,
    getItemsSpecs,
    getItemDescription,
} 