import React from 'react';
import './collection-preview.scss'
import CollectionItem from '../collection-item/CollectionItem.js'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({id, name, price, imageUrl}) => {
                        return <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview