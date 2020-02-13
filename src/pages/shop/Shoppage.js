import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.js'
import CollectionPage from '../shop-collection/ShopCollectionPage.js'

const ShopPage = ({match}) =>{
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage;