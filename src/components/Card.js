import React, { Component } from 'react'
import Form from './Form'
import Rate from './Rate'



const styles = {
    width: '50rem',
    display: 'inline-block',
    
}

export default class Card extends Component {
  render() {
    return (
        <div className="card m-2" style={styles}>
        <div className="card-body">
          <img scr= {this.props.img} className="card-img" alt="" />
          <h5 className="card-title"><span>Movie Title: </span> {this.props.title}</h5>
          <p className="card-stars"><span>Stars: </span>{this.props.stars}</p>
          <p className="card-info"><span>Description: </span>{this.props.info}</p>
          <p className="card-genre"><span>Genre: </span>{this.props.genre}</p>
          <p className="card-posts">Other Reviews: {this.props.reviews}</p>
          <Form/>
          <Rate />
          <a href="https://editorial.rottentomatoes.com/guide/popular-movies/" className="btn btn-primary" 
          onClick={() => alert(`You clicked on ${this.props.title}`)} >Read More...</a>
        </div>
      </div>
    )
  }
}