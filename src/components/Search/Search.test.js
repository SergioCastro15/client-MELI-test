import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import SearchState from '../../context/state'
import SearchContext from '../../context/context'

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const renderWithContext = (component) => {
    const history = createMemoryHistory()

    return {
        ...render(
            <SearchState value={SearchContext}>
                <Router history={history}>
                    {component}
                </Router>
            </SearchState>
        ),history
    }
}

it('should take a snapshot', () => {
    const { asFragment } = renderWithContext(<Search />)
    
    expect(asFragment(<Search />)).toMatchSnapshot()
})


it('should navigate to home page', ()=> {
    const { getByTestId, history } = renderWithContext(<Search />) 
    fireEvent.click(getByTestId('go-home'))

    expect(history.location.pathname).toBe("/")
})

it('should navigate to items page', () => {
    const { getByTestId, history } = renderWithContext(<Search />) 
    fireEvent.submit(getByTestId('go-items'))

    expect(history.location.pathname).toBe("/items")
})