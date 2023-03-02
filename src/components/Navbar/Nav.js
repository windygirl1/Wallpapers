import React, { Component } from "react";
import { Icon56GalleryOutline } from '@vkontakte/icons';
import { Icon56UserCircleOutline } from '@vkontakte/icons';
import { Icon28UploadOutline } from '@vkontakte/icons';
import { Link } from "react-router-dom";
import './Nav.css'



export default class Nav extends Component {

    render() {
    return(
        <div className="Nav">
          <h4 style={{textAlign: 'left', color: '#9da5af'}}>Wallpapers</h4>
          <div className='scrool'>
          <Link to="/profile" style={{textDecoration: 'none'}}>
            <Icon56UserCircleOutline className="Icon" style={{marginTop: '20px', color: '#71aaeb'}}/>
            <span className="Active" style={{color: '#9da5af'}}>Профиль</span>
          </Link>
          <Link to="/upload" style={{textDecoration: 'none'}}>
            <Icon28UploadOutline className="Icon" width={56} height={56} style={{marginTop: '20px', color: '#71aaeb'}}/>
            <span style={{color: '#9da5af'}}>Загрузить</span>
          </Link>
          <Link to="/gallery" style={{textDecoration: 'none'}}>
            <Icon56GalleryOutline className="Icon" style={{paddingTop: '20px', color: '#71aaeb'}}/>
            <span style={{color: '#9da5af', marginRight: '8px'}}>Галерея</span>
          </Link>
          </div>
        </div>
    )
  }
}
