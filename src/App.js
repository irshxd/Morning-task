import './App.css';
import React, { Component } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import {Routes , Route} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';



export class App extends Component{
  render() {
    return (
    
      <div>
         {/* <BrowserRouter> */}
        <Navbar />
        {/* <News pageSize={6} country= 'in' category='Home' /> */}
        <News pageSize={6} country= 'in' category='business' />
        <News pageSize={6} country= 'in' category='entertainment' />
        <News pageSize={6} country= 'in' category='health' />
        <News pageSize={6} country= 'in' category='science' />
        <News pageSize={6} country= 'in' category='sports' />
        <News pageSize={6} country= 'in' category='technology' />
        {/* <Routes> */}
        {/* <Route exact path='/Home'
      element={<News pageSize={6} country= 'in' category='Home' />} />
  
        <Route exact path='/business'
        element={<News pageSize={6} country= 'in' category='business' />}/>
       
        <Route exact path='/entertainment'
        element={<News pageSize={6} country= 'in' category='entertainment' />}/>
        
        <Route exact path='/health'
        element={<News pageSize={6} country= 'in' category='health' />}/>
        
        <Route exact path='/science'
        element={<News pageSize={6} country= 'in' category='science' />}/>
        
        <Route exact path='/sports'
        element={<News pageSize={6} country= 'in' category='sports' />}/>
       
        <Route exact path='/technology'
        element={<News pageSize={6} country= 'in' category='technology' />}/>
       
      <Route exact path='/About us' element={<About/>}/>
        </Routes>
        </BrowserRouter> */}
        <About/>
      </div>
    )
  }
}

export default App