import React from 'react';
import {withRouter} from 'react-router-dom'
import './menuItem.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <div 
        style={{
            position: 'relative',
        }}
        className={`${size} menu-item`}
        onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
            <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
                position: 'absolute',
            }}/>
            <div 
            style={{
                position: 'absolute',
                backgroundColor: 'black',
            }}
            className='background-image-cover'/>
            <div className='content'>
                <h1 className='title'>
                {title}
                </h1>
                <span className="subtitle">
                    SHOP NOW
                </span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)