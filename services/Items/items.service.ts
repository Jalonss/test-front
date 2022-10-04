import { IListItems, IRespond, IRespondItemsList } from "../../utils/interfaces";
import axiosRequest from "../instances/axiosInstance";

const getItemsList = (query: string): Promise<IListItems> => axiosRequest.get(`/search?limit=4&q=${query}`).then(usersTransform)

const usersTransform = (respond: IRespond): IListItems => {
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

export {
    getItemsList,
} 