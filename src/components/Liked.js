import React, { Component } from "react";
import ResultDisplay from './resultDisplay';


export default class Liked extends Component {

    state = {
      img: JSON.parse(localStorage.getItem('yourPosts')) || []   
    }


    
  render() {
    return (
      <>
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
      </>    
    )
  }
}