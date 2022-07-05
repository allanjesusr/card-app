
import {Layout } from '../layouts';
import { CardCharactersList, CardHQList, CardTechnologiesList } from '../components';
import { SearchComponent } from '../components/search/SearchComponent';

export const HomePage = () => {

    return (
        <>
            <SearchComponent />
            <Layout title='Head Quarters'>
                <CardHQList cardType="HQ" />
            </Layout>

            <Layout title='Characters'>
                <CardCharactersList cardType="Character" />
            </Layout>

            <Layout title='Technologies'>
                <CardTechnologiesList cardType="Technology" />
            </Layout>

        </>
    )
}
