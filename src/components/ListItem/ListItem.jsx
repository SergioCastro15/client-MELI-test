import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CurrentItem } from '../CurrentItem/CurrentItem'
import searchContext from '../../context/context'
import './ListItem.scss'

export const ListItem = () => {
    const { currentSearch, getAllitems } = useContext(searchContext)
    const [items, setItems] = useState([])

    useEffect(()=> {
        fetchData()
    }, [currentSearch]);

    const fetchData = async () => {
        const data = await getAllitems(currentSearch)
        setItems(data)
    }


    return (
        <div className="list-container">
            {   items.map(item => ((
                    <CurrentItem
                        key={item.items[0].id}
                        id={item.items[0].id}
                        picture={item.items[0].picture}
                        price={item.items[0].price}
                        title={item.items[0].title}
                        free_shipping={item.items[0].free_shipping}
                        condition={item.items[0].condition}
                    />
                )))
            }
        </div>
    )
}
