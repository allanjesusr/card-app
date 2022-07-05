import { cardApi } from "../api/cardApi";

export const getCardByType = async ( cardType ) => {
    const { data } = await cardApi.get(`/sv7YB2Wq`);
   
    const validTypes = ['HQ', 'Character', 'Technology'];

    if ( !validTypes.includes( cardType ) ) {
        throw new Error(`Invalid Type: ${ cardType }` );
    }
    return data.filter( card => card.CardType == cardType );;
}
