import React from 'react'
import { useHistory } from 'react-router-dom'
import carrito from '../../carrito.png'
import "./CurrentItem.scss"

export const CurrentItem = ({
    id, 
    picture, 
    price, 
    title, 
    free_shipping,
}) => {
    const history = useHistory();

    const goToItemInfo = () => {
        history.push(`/items/${id}`)
    }

    return (
        <div data-testid="go-to-item-info" onClick={goToItemInfo} className="card-item">
            <div className="image-container">
                <img className="card-picture" src={picture} alt=""/>
            </div>
            <div className="card-text-container">
                <div className="price-box">
                    <span className="card-text">$ {price.amount}</span>
                    { free_shipping && <img className="carrito-image" src={carrito} alt=""/>}
                </div>
                <p className="card-text card-text-title">{title}</p>
            </div>
            <p className="card-currency">{price.currency}</p>
        </div>
    )
}
