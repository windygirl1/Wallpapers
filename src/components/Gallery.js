import React, { Component } from 'react'
import axios from 'axios';
import ResultDisplay from './resultDisplay';
import { Icon48ChevronUpOutline } from '@vkontakte/icons';
import './Gallery.css' 
import Loader from './Loader';

export default class Gallery extends Component {  

    state = {
      img: [],
      isFetchind: true
    }

  

  componentDidMount() {
    this.setState({isFetchind: true})
    axios.get('https://wal1-papers-default-rtdb.firebaseio.com/image.json')
    .then(response => {
      const fetchedResults = []
      for( let key in response.data) {
        fetchedResults.unshift(
          {
           ...response.data[key],
           id: key
          }
        )
      } 
      this.setState({img: fetchedResults})
      this.setState({isFetchind: false})
    })
    .catch(function(error) {
      console.log(error);
    })
  }


  BtnScrollUp = () => {
    const rootElement = document.documentElement
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    window.location.reload()
  }

  render() { 
     return (
      <>
        <div className='Main'>
          <h1 style={{textAlign: 'center', color: '#9da5af'}}>Галерея</h1>
          {this.state.isFetchind ? <Loader/> :
          <div>
            {this.state.img.map(i => (
              <ResultDisplay 
              key={i.id}
              link={i[0]}
              name={i[1]}
              id={i[2]}
              />
            ))}
         </div>
        }
         </div>
         <Icon48ChevronUpOutline className='up' onClick={this.BtnScrollUp}/>
      </>
    )
  } 
}

