import React, { Component } from 'react'
import { Icon16Attach } from '@vkontakte/icons';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import './Upload.css'
import axios from 'axios';
import $ from "jquery";


export default class Upload extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef(null);
    this.state = { 
      image: {
      0: [],
      1: [],
      2: [],
      3: false
      },
      progress: 0,
      token: localStorage.getItem('token'),
      userId: JSON.parse(localStorage.getItem('userId'))
  }
}


  formHandler = (e) => {
    e.preventDefault() 
    const file = e.target[0].files[0]
    this.uploadFiles(file)
  }

   handlePick = () => {
    this.myRef.current.click()
  }

   uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      )
      this.setState({progress: prog})
    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => (
         this.state.image[0] = url
        ))
        
      } 
    )
    $.ajax({
      url: `https://api.vk.com/method/users.get?user_ids=${this.state.userId}&v=5.131&access_token=${this.state.token}`,
      method: 'GET',
      dataType: 'JSONP',
      success: data => {
        this.state.image[1] = data.response[0].first_name + ' ' + data.response[0].last_name
        this.state.image[2] = data.response[0].id
      }
    })
  } 

  // handleChange = ({target: {value, id}}) => {
  //   this.setState({
  //   photos: { [id]: value }
  //   })
  // }


  // dowloand = (file) => {
  //   const storage = getStorage();
  
  //   // listAll(listRef)
  //   // .then((res) => {
  //   //   res.items.forEach((itemRef) => {
  //   //     const allRef = ref(storage, itemRef)
  //   //     getDownloadURL(allRef)
  //        getDownloadURL(ref(storage, `gs://wal1-papers.appspot.com/files/${file.name}`))
  //        .then((url) => {
  //         console.log(url)
  //         this.setState({photos: url})
  //   })
  //   .catch((error) => {
  //     switch (error.code) {
  //       case 'storage/object-not-found':
  //         break;
  //       case 'storage/unauthorized':
  //         break;
  //       case 'storage/canceled':
  //         break;
  
  //       case 'storage/unknown':
  //         break;
  //     }
  //   });
  //   
  // }
  
  sendPhoto = () => {
  console.log(this.state.image)
  axios.post('https://wal1-papers-default-rtdb.firebaseio.com/image.json', this.state.image)
  .then(response => {
  console.log(response)
  let allPosts = []
  if (localStorage.getItem('yourPosts')) allPosts = JSON.parse(localStorage.getItem('yourPosts'))
  let allPost = this.state.image
  allPosts.push(allPost)
  localStorage.setItem('yourPosts', JSON.stringify(allPosts))
  })
  .catch(error => console.log(error))
}



  render() {
    return (
        <div className='Main'>
          <h1 style={{textAlign: 'center', color: '#9da5af'}}>Загрузить</h1>
          <span style={{color: '#9da5af'}}>Нажми на скрепку, чтобы выбрать свои обои для загрузки</span>
          <form onSubmit={this.formHandler}>
          <Icon16Attach
            type='file' 
            onClick={this.handlePick}
            className='Icon2' 
            width={56} 
            height={56}
            style={{cursor: 'pointer', color: '#71aaeb'}}
            />
          <input className='hidden' type='file' ref={this.myRef} id='link' accept='image/*,.png,.jpg'/>  
          <button className='btn'type='submit' style={{cursor: 'pointer', color: '#rgb(44 53 64)', backgroundColor: '#71aaeb', border: 'none'}}>Загрузить</button>
          <button className='btn2' onClick={this.sendPhoto} style={{cursor: 'pointer', color: '#rgb(44 53 64)', backgroundColor: '#71aaeb', border: 'none'}}>Опубликовать</button>
          </form>
          <h3 style={{color: '#9da5af'}}>Загруженно {this.state.progress} %</h3>
        </div>
    )
  }
}


