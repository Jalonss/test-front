import { IListItem, ISpecsItem } from 'utils/interfaces'
import { axiosRequest } from '../../instances/axiosInstance'

const getItemsList = async (query: string) =>
    axiosRequest.get(`?q=${query}`).then((res) => res.data.data)
const getItemsSpecs = async (id: string) =>
    axiosRequest.get(`/${id}`).then((res) => res.data.data)

const transformItemList = (data: { items: IListItem[] }): IListItem[] => {
    console.log('que onda', data)
    const { items } = data
    return items
}
const transformItemSpecs = (data: { item: ISpecsItem }): ISpecsItem => {
    const { item } = data
    return item
}
export { getItemsList, getItemsSpecs, transformItemList, transformItemSpecs }
