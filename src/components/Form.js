import React, { Component } from 'react'

export default class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            leaveReview: ''
        }
    }
    handlernameChange = (event) => {
        this.setState({
            leaveReview: event.target.value,
            
        })

    }
  render() {
    return (
        
        <form>
            <div className='form center bg-grey p-3'>
                <div className='mb-4 text-center center width=75% p-3' >
                    
                    <label> Please Leave a Review of the Movie</label>
                    <imput type="text" 
                    className="form-control center width=75% p-3"
                    value={this.state.leaveReview} 
                    onChange = {this.handlernameChange }/>
                </div>

            </div>
 
            
        </form>
        

    )
  }
}