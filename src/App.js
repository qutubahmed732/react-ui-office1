import logo from './logo.svg';
import React from 'react';
import logoPic from './logoPic.png'
import profileImage from './Ellipse 5.png'

import './App.css';


function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Aside />
        <Section />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className='logo'>
      <div className='logoDiv' style={{width:'20rem'}}>
      <img src={logoPic} alt='company logo' style={{ margin:'10px 35px' }} />
      </div>
      <div className='profileSection'>
        <div className='adminProfile' style={{ display: "flex", gap: '15px', alignItems: 'center' }}>
          <img src={profileImage} alt='profile image' />
          <div><h4>Obinna Festus <i></i></h4>
            <p>Admin</p></div>
        </div>
      </div>
    </header>
  )
}

function Aside() {
  return (
    <aside>
      <div className='buttons'>
        <button>Data Managemant</button>
        <button>Content Managemant System(CMS)</button>
        <button>User Managemant</button>
      </div>
      <button className='logout'><i className="fa-solid fa-house"></i> Log out</button>
    </aside>
  )
}

function Section(props) {
  return (
    <>
      <div className="section">
        <div className='sub-section'>
          <div className='heading'>
            <h1>Company Managemant</h1>
            <p>Manage and Updates all data related to your Benchmarking Index and sector-specific Information</p>
          </div>
          <div className='exportButton' style={{ display: 'flex', position: 'relative', top: '20px', gap: '10px', left: '560px' }}>
            <button>Export</button>
            <button>+ Add Company</button>
          </div>
          <div className='bars'>
            <div className='input'>
              <input type='text' placeholder='Search Company...' />
              <select>
                <option>Industry</option>
              </select>
              <button>Search</button>
            </div>
            <ul style={{backgroundColor:'white'}}>
              <li style={{backgroundColor:'white'}}>Company</li>
              <li style={{backgroundColor:'white'}}>Ticker</li>
              <li style={{backgroundColor:'white'}}>Industry</li>
              <li style={{backgroundColor:'white'}}>Action</li>
            </ul>
            <ul id='checkboxDiv'>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <input type="checkbox" id='checkbox' />
                <label for='checkbox'>SK Inc</label>
              </li>
              <li>034730.KS</li>
              <li>Energy</li>
              <li style={{ display: 'flex', gap: '10px' }}><i className="fa-solid fa-pen"></i><i className="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
            <ul id='checkboxDiv'  style={{backgroundColor:'white'}}>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'white'}}>
                <input type="checkbox" id='checkbox'  style={{backgroundColor:'white'}}/>
                <label for='checkbox' style={{backgroundColor:'white'}}>SK Inc</label>
              </li>
              <li style={{backgroundColor:'white'}}>034730.KS</li>
              <li style={{backgroundColor:'white'}}>Energy</li>
              <li style={{ display: 'flex', gap: '10px', backgroundColor:'white'}}><i class="fa-solid fa-pen"></i><i className="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
            <ul id='checkboxDiv'>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <input type="checkbox" id='checkbox' />
                <label for='checkbox'>SK Inc</label>
              </li>
              <li>034730.KS</li>
              <li>Energy</li>
              <li style={{ display: 'flex', gap: '10px' }}><i class="fa-solid fa-pen"></i><i className="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
            <ul id='checkboxDiv' style={{backgroundColor:'white'}}>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'white'}}>
                <input type="checkbox" id='checkbox' />
                <label for='checkbox'>SK Inc</label>
              </li>
              <li style={{backgroundColor:'white'}}>034730.KS</li>
              <li style={{backgroundColor:'white'}}>Energy</li>
              <li style={{ display: 'flex', gap: '10px', backgroundColor:'white'}}><i className="fa-solid fa-pen"></i><i class="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
            <ul id='checkboxDiv'>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <input type="checkbox" id='checkbox' />
                <label for='checkbox'>SK Inc</label>
              </li>
              <li>034730.KS</li>
              <li>Energy</li>
              <li style={{ display: 'flex', gap: '10px' }}><i class="fa-solid fa-pen"></i><i className="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
            <ul id='checkboxDiv' style={{backgroundColor:'white'}}>
              <li style={{ width: '100px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'white'}}>
                <input type="checkbox" id='checkbox' />
                <label for='checkbox'>SK Inc</label>
              </li>
              <li style={{backgroundColor:'white'}}>034730.KS</li>
              <li style={{backgroundColor:'white'}}>Energy</li>
              <li style={{ display: 'flex', gap: '10px', backgroundColor:'white'}}><i className="fa-solid fa-pen"></i><i className="fa-solid fa-trash-can"></i><i className="fa-regular fa-circle-down"></i></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}




export default App;
