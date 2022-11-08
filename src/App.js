import React, { useState } from 'react';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import devhed from './programmer-avatar-developer-coder-male-professional-character-occupation-profession-2-512-4189073340.png'
import html from './html.png';
import css from './css.png';
import react from './react.png';
import redux from './redux.jpeg';
import About from './About';

function App() {
  const [darkMode ,setDarkMode] = useState(false);
  
  return (


    <div className= {darkMode ? "dark" : ""}>
      <div className >
      <header className>
        
        <main className='  dark:bg-gray-900 '>
        <section  className='  min-h-screen'>
          
        <nav className='navbar navbar-expand-lg bg-dark  p-10 mb-12 flex justify-between dark: text-white'>
        <div class="container-fluid">

          <h1 className=' text-xl pr-10 font-serif  dark:text-white'>devlopedbyvenkat</h1>
          <ul className='flex mr-auto'>

          <li><a className=' text-xl pr-10 font-serif  dark:text-white '>about me</a></li>
          <li><a href={<About/>}  className=' text-xl pr-10 font-serif  dark:text-white '>skills</a></li>
          </ul>

          <ul className ='flex '>
          
          
          <div className='text-xl pr-10 flex items-end   font-serif'>
            <li>
              <BsFillMoonStarsFill className=' cursor-pointer text-xl dark:text-white' onClick={()=> setDarkMode(!darkMode)}/>
            </li>
            <li><a className="bg-gradient-to-r from-orange-500  to-red-500 text-white px-4 py-2 rounded-md ml-8" href='#'>Resume</a></li>
            </div>
          </ul>
          </div>
          </nav>
         
          
          
      <div className=' text-center p-10 '>
          <h2 className=' text-4xl py-2 text-orange-500 to text-red-500 font-medium'>R.VenkataKrishnan</h2>
          <h3 className='text-2xl py-2  dark:text-white'>Student at Rajalakshmi Engineering College</h3>
          <p className='py-2 font-mono-medium leading-10 text-gray-800  dark:text-white'>I am currently learning React and This is my first portofolio website!!</p>

      </div>  


      <div className='flex text-5xl justify-center gap-20 py-3 text-gray-600'>
          <a href='' ><AiFillInstagram/></a>
          <a href=''><AiFillLinkedin/> </a>
      </div>
      <div className='relative my-20'>
        <img src ={devhed} className="w-60 mt-7   h-60  mx-auto bg-gradient-to-b from-red-500 to-orange-500 rounded-full overflow-hidden" />
      </div>
    </section>  
    
      <section>
        <div>
            <h2 className=' text-5xl text-center py-1  text-orange-500 to text-red-500'>Projects</h2>

        </div>
      
      </section>
      </main>
      
      </header>
     
      </div>
    </div>

  );
}

export default App;
