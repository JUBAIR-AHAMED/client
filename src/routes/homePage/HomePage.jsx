import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place.</h1>
          <p>Discover your dream home with our comprehensive real estate services! Whether you're seeking a cozy apartment in the heart of the city, a spacious family house in the suburbs, or a luxurious retreat in a serene countryside, we've got you covered</p>
          <SearchBar/>
          <div className="boxes">
            
            <div className="box">
              <h1>10+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property ready</h2>
              
            </div>
            
          </div>
        </div>
        </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="design bg" />
      </div>
    </div>
  )
}

export default HomePage