import { cardApi } from "../api/cardApi";

export const getCardById = async ( id ) => {
    const { data } = await cardApi.get(`/sv7YB2Wq`);
    return data.find( card => card.id === id );
}
