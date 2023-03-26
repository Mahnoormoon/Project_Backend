import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
//imported assets
import homeimage from '../../assets/Homeimg.jpg';
import todoicon from './todoicon.webp';
import musicicon from './musicicon.webp';
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h2>Organize your Work, Study & Life with ToDoCafe'</h2>
      </div>
      <div className="homeImages flex">
        <div className="imageDiv">
          <img src={homeimage} className='image' />
        </div>
        <img src={todoicon} className="todoicon" />
        <img src={musicicon} className="musicicon" />
      </div>
      <Link type="link" className="btnn btn-rounded btn-outline-white align-items-center" to={'/main/signup/'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get Started&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Home;