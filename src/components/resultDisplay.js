import React, { Component } from "react";
// import { Icon20LikeOutline } from '@vkontakte/icons';
// import { Icon28DownloadOutline } from '@vkontakte/icons';
import './resultDisplay.css'




 export default class ResultDisplay extends Component{


  // liked = () => {
  //   let like = this.props.likes + 1
  //   this.state.likes = like
  //   this.post()
  // }

  // post = () => {
  //   console.log(this.state.likes)
  //   axios.post('https://wal1-papers-default-rtdb.firebaseio.com/likes.json', this.state.likes)
  //      .then(res => {
  //       console.log(res)
  //      })
  //      .catch(error => console.log(error))
  // }

  // componentDidMount() {
  //   axios.get('https://wal1-papers-default-rtdb.firebaseio.com/likes.json')
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(error => console.log(error))
  // }

  // const fillHeart = props.likes ? 'red' : 'black'

  //   blobToFile = () => {
  //   // let file = new Blob([this.props.link], {type:'image/jpeg'})
  //   // console.log(this.props.link)
  //   // saveAs(this.props.link, 'wall.jpg')
  // }
  


  render() {
  return (
    <div style={{marginBottom: '20px'}}>
      <a href={`https://vk.com/id${this.props.id}`} style={{color: '#9da5af', textDecoration: 'none'}}>{this.props.name}</a>
      <img style={{width: '100%'}} alt='wallpaper'src={this.props.link} loading='lazy'/>
      <div> 
      {/* <Icon20LikeOutline style={{color: fillHeart, cursor: 'pointer'}} onClick={props.likePost}/> 
      <span className='likes'></span> */}
      {/* <a href={this.props.link} download> */}
      {/* <Icon28DownloadOutline onClick={this.blobToFile()} width={20} height={20} style={{marginLeft: '230px', marginTop: '2px', cursor: 'pointer'}}/> */}
      {/* </a> */}
     </div>
    </div>
  ) 
}
}



