import React from 'react'
import { useHistory } from 'react-router-dom'
import "./CurrentItem.scss"

export const CurrentItem = ({
    id, 
    picture, 
    price, 
    title, 
    free_shipping, 
    condition
}) => {
    const history = useHistory();

    const goToItemInfo = () => {
        history.push('/items/' + id)
    }

    return (
        <div onClick={goToItemInfo} className="card-item">
            <div className="image-container">
                <img className="card-picture" src={picture} alt=""/>
            </div>
            <div className="card-text-container">
                <p className="card-text">$ {price.amount}</p>
                <p className="card-text card-text-title">{title}</p>
            </div>
            <p className="card-currency">{price.currency}</p>
        </div>
    )
}
