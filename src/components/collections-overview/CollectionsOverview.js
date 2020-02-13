import React from 'react'
import {connect} from 'react-redux'
import CollectionPreview from '../collection-preview/CollectionPreview.js'
import {selectCollectionConvertToArray} from '../../redux/shop/shopSelector.js'

import './collections-overview.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, title, items}) => {
                    return <CollectionPreview key={id} title={title} items={items} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: selectCollectionConvertToArray(state)
    }
}

export default connect(mapStateToProps, null)(CollectionsOverview)