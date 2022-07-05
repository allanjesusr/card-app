import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCardByType } from '../selectors/getCardByType';

export const CardHQList = ({ cardType }) => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCardByType(cardType).then((data) => {
            setList(data);
        });
    }, []);

    return (
        <ul className='list__hqcontainer '>
            {
                list.map(card => (
                    <li key={card.id}>
                        <img 
                            src={(card.id) ? `https://deviants-factions.mo.cloudinary.net/cards/${card.id}.png?tx=h_600,q_80,f_auto` : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'} 
                            alt={card.Name} 
                            onError={( e ) => e.target.src = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                            className='pointer'
                            onClick={ () => navigate(`/${ card.id }`) }
                        />
                    </li>
                ))
            }
        </ul>
    )
}