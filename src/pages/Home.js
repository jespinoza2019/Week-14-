import React, { Component } from 'react'
import Card from '../components/Card'
import data  from '../index1.js'
import Film from '../images/maxresdefault.jpg'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    return (
        //Call ing my Component on my home page
      <div className='body'>
        <Navbar/>   
        <h3 className='heading'>Espo's Favorite Movies</h3>  
        <main className='container'>
                  <img src={Film}  alt="" style={{minWidth: '100%', height: '20rem'}} />
            {data.map(movie => <Card 
            key={movie.id} title={movie.title} genre={movie.genres} stars={movie.stars} info={movie.info} posts={movie.posts}> 
            
            <img scr={movie.img}  alt=""/>
            <Form/>
            
            </Card>)}  
            
        </main> 
        
        <Footer/>
     </div>
    )
  }
}