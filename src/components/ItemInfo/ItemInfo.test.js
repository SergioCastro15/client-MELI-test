import React from 'react'
import { render } from '@testing-library/react'
import { ItemInfo } from './ItemInfo'
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
    const { asFragment } = renderWithContext(<ItemInfo />)
    
    expect(asFragment(<ItemInfo />)).toMatchSnapshot()
})