import React from 'react'
import SHOP_DATA from './shopData.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map(({id, title, items, }) => {
                        return <CollectionPreview key={id} title={title} items={items} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;