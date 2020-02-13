import React from 'react';
import {connect} from 'react-redux'
import MenuItem from '../menu-items/MenuItem.js'
import './directory.scss'
import {selectDirectorySections} from '../../redux/directory/directorySelector.js'

const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
        {
            sections.map(({title, imageUrl, id, size, linkUrl}) => {
                return <MenuItem title={title.toUpperCase()} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
            })
        }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state)
  }
}

export default connect(mapStateToProps, null)(Directory)