import React, {Component} from 'react'
import './index.css'
class NavBar extends Component {
  render(){
    return(
      <nav className="top-navbar">
        <ul>
          <li className="logo"><img src="/images/Logo.svg" alt=""/></li>
          <li className="search"><button><img src="/images/jam-search.svg" alt=""/></button><input placeholder="Search..."/></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Create Listing</a></li>
          <li className="signIn">Sign In/Sign Up</li>
        </ul>
      </nav>
    )
  }
}
export default NavBar