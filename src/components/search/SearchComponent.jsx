import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getCardByName } from "../../selectors/getCardByName";


export const SearchComponent = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const { q = '' } = queryString.parse(location.search);

    useEffect(() => {
        getCardByName(q).then((data) => {
            setList(data);
        });
    }, [])

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <form
                className="search__form-container"
                onSubmit={onSearchSubmit}
            >
                <input
                    type="text"
                    placeholder="Search a card"
                    className="search__input"
                    autoComplete="off"
                    name="searchText"
                    value={searchText}
                    onChange={onInputChange}
                />

                <button>
                    Search
                </button>
            </form>

            {
                list.map(card => (
                    <ul className="list__hqcontainer "
                    key={card.Number}>
                        <li >
                            <img
                                src={(card.id) ? `https://deviants-factions.mo.cloudinary.net/cards/${card.id}.png?tx=h_600,q_80,f_auto` : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                                alt={card.Name}
                                onError={(e) => e.target.src = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                                onClick={ () => navigate(`/${ card.id }`) }
                                className="pointer"
                            />
                        </li>
                    </ul>
                ))
                
            }

        </>



    )
}
