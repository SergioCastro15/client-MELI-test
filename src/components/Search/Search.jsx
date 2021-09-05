import React, { useState, useContext } from 'react'
import searchContext from '../../context/context'
import { useHistory } from 'react-router-dom'
import logo from '../../logo.png'
import lupa from '../../lupa.png'

import './Search.scss';

export const Search = () => {
    const history = useHistory();
    const { getCurrentSearch } = useContext(searchContext)

    const [textValue, setTextValue] = useState({
        search: ''
    })

    const triggerInputSearch = (e) => {
        e.preventDefault()
        setTextValue({
            ...textValue,
            [e.target.name]: e.target.value
        })
    }

    const activeSearchButton = (e) => {
        e.preventDefault()
        getCurrentSearch(textValue.search)
        history.push('/items?q=' + textValue.search)
    }

    return (
        <nav className="navbar-search">
            <img className="logo" src={logo} alt="logo"/>
            <form onSubmit={activeSearchButton} >
                <input
                    className="input-search"
                    name="search"
                    onChange={triggerInputSearch} 
                    placeholder='Nunca dejes de buscar' 
                    type="text"
                />
                <button type="submit">
                    <img className="lupa" src={lupa} alt="lupa"/>
                </button>
            </form>

        </nav>
    )
}
