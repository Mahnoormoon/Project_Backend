import React from 'react'
import './Home.css';
//imported assets
import homeimage from '../../assets/Homeimg.jpg';
import todoicon from './todoicon.webp';
import musicicon from './musicicon.webp';
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h2>Organize Your Work, Study & Life with ToDoCafe'</h2>
      </div>
      <div className="homeImages flex">
        <div className="imageDiv">
          <img src={homeimage} className='image' />
        </div>
        <img src={todoicon} className="todoicon" />
        <img src={musicicon} className="musicicon" />
      </div>
        <button
          type="submit"
          className="btnn btn-rounded btn-outline-white mb-4">
          Get Started <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default Home;