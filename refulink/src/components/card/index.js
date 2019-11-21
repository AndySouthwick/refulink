import React, {Component} from 'react'
import './index.css'

class Card extends Component{
  render(){
    return(
    <div class="card">
      <div class="card-image">
       <div class="card-type-box">Provider</div>
     </div>
     <div class="card-content">
       <span>Salt Lake City, Utah</span>
       <h3>I can give rides</h3>
       <p>If you need a ride to work...</p>
       <button>View</button>
     </div>
   </div>
    )
  }
}

export default Card