import React, { useState, useEffect, useContext } from 'react'
import searchContext from '../../context/context'
import "./ItemInfo.scss"

export const ItemInfo = ({ match }) => {

    const { getCurrentItem } = useContext(searchContext)
    const [item, setItem] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await getCurrentItem(match.params.id)
        setItem(data)
    }

    return (
        <>
            <div className="container-box">
                <div className="item-info-container">
                    <img className="item-info-picture" src={item.picture} alt=""/>
                    <div className="item-info-text">
                        {
                            item && 
                            <>
                                <p>{item.condition}</p>
                                <h2>{item.item?.title}</h2>
                                <p className="item-price">$ {item.item?.price?.amount}</p>
                                <button className="item-info-button">Comprar</button>
                            </>
                        }
                    </div>
                </div>

                <div className="description-container">
                    <h2 className="text-description-title ">Descripcion del producto</h2>
                    <p className="text-description">{item.description}</p>
                </div>
            </div>
        </>
    )
}
