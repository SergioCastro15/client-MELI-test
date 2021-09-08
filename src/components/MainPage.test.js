import React from 'react'
import { render } from '@testing-library/react'
import { MainPage } from './MainPage'


it('should take a snapshot', () => {
    const { asFragment } = render(<MainPage />)
    expect(asFragment(<MainPage />)).toMatchSnapshot()
})