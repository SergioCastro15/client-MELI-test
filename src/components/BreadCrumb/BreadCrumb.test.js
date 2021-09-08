import React from 'react'
import { render } from '@testing-library/react'
import { BreadCrumb } from './BreadCrumb'

it('should take a snapshot', () => {
    const currentCategories = ["Audio", "Video", "Musica", "Entretenimiento", "Imagen"]
    const { asFragment } = render(<BreadCrumb currentCategories={currentCategories}/>)
    expect(asFragment(<BreadCrumb />)).toMatchSnapshot()
})