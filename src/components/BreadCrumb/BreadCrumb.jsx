import React from 'react'
import './BreadCrumb.scss'

export const BreadCrumb = ({ currentCategories }) => (
    <div className="bread-crumb-container">
        {currentCategories.map((category, index) => ((
            <p key={index} className="bread-crumb-info">{category}</p>
        )))}
    </div>
)
