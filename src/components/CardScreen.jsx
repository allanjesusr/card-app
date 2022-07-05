import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getCardById } from "../selectors/getCardById";

export const CardScreen = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const { cardId } = useParams();

    useEffect(() => {
        getCardById(cardId).then((data) => {
            setList(data);
        });;
    }, [cardId]);

    const handleBack = () => {
        navigate('/');
    }
    
    return (
        <div className="card__main-container">
            <div className='card__image-container animate__animated animate__fadeInLeft'>
                <img
                    src={(list.id) ? `https://deviants-factions.mo.cloudinary.net/cards/${list.id}.png?tx=h_600,q_80,f_auto` : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                    alt={list.Name}
                    onError={(e) => e.target.src = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                />
            </div>
            <div className="card__card-description animate__animated animate__fadeInRight">
                <div>
                    <p>Card Name: {list.Name}</p>
                    <p>Card Description: {list.Description}</p>
                    <p>Faction: {list.Faction}</p>
                    <p>Rarity: {list.Rarity}</p>
                    <p>Set: {list.Set}</p>
                    <p>St: {list.St}</p>
                </div>

                <button
                    className="card__back-btn"
                    onClick={handleBack}
                >
                    Go Back
                </button>

            </div>



        </div>
    )
}
