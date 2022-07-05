import { cardApi } from "../api/cardApi";

export const getCardByName = async ( name = '' ) => {
    const { data } = await cardApi.get(`/sv7YB2Wq`);
    name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return [];
    return data.filter( card => card.Name.toLocaleLowerCase().includes( name ) );
}
