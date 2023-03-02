import React, { Component } from 'react'
import './Profile.css'
import Loader from './Loader'
import Liked from './Liked'
import $ from 'jquery'
import bridge from '@vkontakte/vk-bridge'
import { json } from 'react-router-dom'

export default class Profile extends Component {

  state = {
    user: [],
    url: [],
    id: [],
    token: localStorage.getItem('token'),
    userId: JSON.parse(localStorage.getItem('userId'))
  }



componentDidMount() {
  $.ajax({
    url: `https://api.vk.com/method/users.get?user_ids=${this.state.userId}&fields=photo_100&v=5.131&access_token=${this.state.token}`,
    method: 'GET',
    dataType: 'JSONP',
    success: data => {
      this.setState({user: data.response[0].first_name + ' ' + data.response[0].last_name})
      this.setState({url: data.response[0].photo_100})
      this.setState({id: data.response[0].id})
  }
  })
}


  render() {
   return(
        <div className='Main'>
          <h1 style={{textAlign: 'center', color: '#9da5af'}}>Профиль</h1>
          {this.state.url === '' ? <Loader/> :
          <div>
          <h2 style={{wordWrap: 'break-word', color: '#9da5af'}}>{this.state.user}</h2>
          <span className='Pod'>
          <img className='photo' src={this.state.url}/>
          </span>
          </div>
          }
          <h4 style={{padding:'100px 0 0 0', color: '#9da5af'}}>Твои обои: </h4>
          <Liked/>
        </div>
    )
  }
}
