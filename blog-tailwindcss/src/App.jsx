import './App.css';
import hero from "./assets/Hero.png";
import designer from "./assets/Designer.png"
import mobileapp from "./assets/MobileApp.png"
import website from "./assets/Website.png"
import { useState } from 'react';

function App() {

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuVisible(!isMenuVisible)
  }
  

  return (
    <>

    {/* Nav Bar */}

   <div className='container mx-auto bg-green-200'>
    <nav className='flex justify-between items-center'>
      <div className='h-16 w-16'>
      <a href='#'><img className='rounded-full' src='https://picsum.photos/200'></img></a>
      </div>
      <ul className='hidden md:flex space-x-6'>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Services</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Pricing</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>About</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Contact Us</a></li>
      </ul>
      <button className='hidden md:block bg-green-500 font-medium px-4 py-2 rounded-full text-white hover:bg-blue-400'>Sign Up</button>
      <button onClick={toggleMenu} className=' md:hidden mobile-icon'><svg className='h-10 w-10 mr-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>
      
    </nav>

   </div>

   {/* Mobile Nav Bar */}


   {isMenuVisible&&(
   <div className='md:hidden mobile-menu'>
   <ul className='flex flex-col items-center space-y-6'>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Services</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Pricing</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>About</a></li>
        <li><a className='text-blue-700 font-medium hover:text-green-950' href='#'>Contact Us</a></li>
        <li><button className=' md:block bg-green-500 font-medium px-4 py-2 rounded-full text-white hover:bg-blue-400'>Sign Up</button></li>
      </ul>
   </div>
   )
}


   {/* Hero Section */}
   <div className='container mx-auto mt-12 flex flex-col md:flex-row'>
    <div className='md:w-1/2 text-center mt-10'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus veritatis facere exercitationem quibusdam tenetur est similique mollitia corrupti error animi, ipsam voluptates sapiente, 
        nobis perspiciatis id facilis. Repellendus provident eaque voluptatum harum temporibus, dignissimos molestiae in, fugit fuga distinctio totam placeat odio earum, excepturi quas! Velit rem fugit quia
         quae provident nihil consectetur! Amet veritatis, dolore optio odit quae facere, cumque qui dolor praesentium dolorem ab molestias culpa doloribus ut. Ex, dolore iusto repudiandae fugit quia sapiente 
         ab quas non quos quidem blanditiis veritatis magni quaerat explicabo eligendi provident cum tenetur officia! Odit impedit alias ipsa suscipit culpa nisi.</p>
         <button className='bg-indigo-700 font-medium p-2 rounded-full mt-2 text-white hover:bg-green-950'>Get Started</button>
    </div>
    <div className='md:w-1/2 '>
      <img className='mx-auto w-96 h-96' src={hero} alt="Hero Section" />

    </div>
   </div>

   {/* Main Section */}
   <div className='container mx-auto flex flex-col md:flex-row gap-14 '>
    <div className='md:w-1/3  text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Web Development</h1>
      <img className='w-40 h-40' src={website} alt=''></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat maxime similique dolores. Distinctio sit eaque quasi, similique ducimus saepe, a pariatur quisquam ullam 
        veniam reiciendis velit. Voluptas, sint. Placeat adipisci culpa ab. Vitae corporis nisi enim harum commodi, autem veritatis omnis, rem iste obcaecati nostrum molestiae quis, unde id.
        </p>

    </div>
    <div className='md:w-1/3 text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Mobile Development</h1>
      <img className= "w-40 h-40"src={mobileapp} alt=''></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat maxime similique dolores. Distinctio sit eaque quasi, similique ducimus saepe, a pariatur quisquam ullam 
        veniam reiciendis velit. Voluptas, sint. Placeat adipisci culpa ab. Vitae corporis nisi enim harum commodi, autem veritatis omnis, rem iste obcaecati nostrum molestiae quis, unde id.
        </p>

    </div>
    <div className='md:w-1/3 text-center flex flex-col items-center'>
      <h1 className='text-2xl'>Design</h1>
      <img className='h-40 w-40 ' src={designer} alt=''></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat maxime similique dolores. Distinctio sit eaque quasi, similique ducimus saepe, a pariatur quisquam ullam 
        veniam reiciendis velit. Voluptas, sint. Placeat adipisci culpa ab. Vitae corporis nisi enim harum commodi, autem veritatis omnis, rem iste obcaecati nostrum molestiae quis, unde id.
        </p>

    </div>
   </div>

   {/* Pricing Section */}
   <div className='container mx-auto mt-6 '>
    <div className='text-center'>
    <h1 className='font-bold text-3xl text-green-500'>Pricing</h1>
    <p className='text-2xl'>Offers Multiple Packeges for Monthly and Yearly Subscriptions</p>
    <p className='text-2xl'>Featured Plans are Here</p>
    </div>
    
    <div className= 'grid md:grid-cols-3 grid:cols-1 gap-4 mt-4 mx-32 md:mx-10'>
      <div className='relative bg-gray-200  mt-4 w-80 rounded-2xl text-center hover:shadow-2xl'>
        <h1 className='font-bold text-5xl'>$99</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Basic</h2>
        <p>All the Best Features are Included</p>
        <ul className='ml-4 mb-10'>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-red-500' fill="currentColor"  viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/>
            <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"/>
            </svg>
            </div>
            <div>
              Customized Features
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-red-500' fill="currentColor"  viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/>
            <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"/>
            </svg>
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>
        <button className='absolute bottom-0 transform translate-y-5 -translate-x-16 bg-indigo-700 font-medium p-2 rounded-full text-white hover:bg-green-950'>Get Started</button>
      </div>
      <div className='relative bg-gray-200 border-4 text-center border-indigo-500 border-dashed  w-80 rounded-2xl hover:shadow-2xl'>
      <h1 className='font-bold text-5xl'>$199</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Advanced</h2>
        <p>All the Best Features are Included</p>
        <ul className='ml-4 mb-10'>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Customized Features
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-red-500' fill="currentColor"  viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/>
            <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"/>
            </svg>
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>
        <button className='absolute bottom-0 transform translate-y-5 -translate-x-16 bg-indigo-700 font-medium p-2 rounded-full text-white hover:bg-green-950'>Get Started</button>

      </div>


      <div className='relative text-center bg-gray-200 mt-4 w-80 rounded-2xl hover:shadow-2xl'>
      <h1 className='font-bold text-5xl'>$299</h1>
        <h2 className='text-green-500 mb-3 font-bold'>Business</h2>
        <p>All the Best Features are Included</p>
        <ul className='ml-4'>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Core Bussiness System
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
              Customized Features
            </div>
          </li>
          <li className='flex items-center mt-4'>
            <div>
            <svg className='w-6 h-6 text-indigo-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z" />
            </svg>
            </div>
            <div>
             Dual Infrastructure
            </div>
          </li>
        </ul>
        <button className='absolute bottom-0 transform translate-y-5 -translate-x-16 bg-indigo-700 font-medium p-2 rounded-full text-white hover:bg-green-950'>Get Started</button>
      </div>
      

    </div>
   </div>

   {/* Story Section */}
   <div className='container mt-12'>
    <div className='text-center'>
      <h1>Recent Updates</h1>
      <h1 className='text-5xl'>Featured Stories</h1>
    </div>
    <div className='grid md:grid-cols-3 sm:grid-cols-1  gap-32' >
      <div className='hover:shadow-2xl bg-gray-200 rounded-2xl text-center'>
        <img className='mt-4 w-full h-60' src='https://picsum.photos/200'></img>
        <h1 className='mt-4 text-2xl text-indigo-500'>Google Ranking</h1>
        <p className='font-thin my-4'>Make it Connect With Every Client Worldwide</p>
        <a className='text-bold text-indigo-500 hover:text-black' href='#'>Read More</a>
      </div>
      <div className='hover:shadow-2xl bg-gray-200 rounded-2xl text-center'>
      <img className='mt-4 w-full h-60' src='https://picsum.photos/200'></img>
      <h1 className='mt-4 text-2xl text-indigo-500'>Communication</h1>
      <p className='font-thin my-4'>Best Communication For The Bussiness</p>
      <a className='text-bold text-indigo-500 hover:text-black' href='#'>Read More</a>
      </div>
      <div className='hover:shadow-2xl bg-gray-200 rounded-2xl text-center'>
      <img className='mt-4 w-full h-60' src='https://picsum.photos/200'></img>
      <h1 className='mt-4 text-2xl text-indigo-500'>Remote Working</h1>
      <p className='font-thin my-4'>Remote Connectivity for Consistent</p>
      <a className='text-bold text-indigo-500 hover:text-black' href='#'>Read More</a>
      </div>
    </div>
   </div>


   {/* Footer Section */}

   <footer className='bg-gray-200 mt-12 '>
    <div className='container mx-auto flex flex-col sm:gap-5 md:flex-row py-10 md:pt-32'>
      <div className='w-1/4'>
      <p className='font-medium text-2xl'>Gokul's Code</p>
      </div>
      <div className='w-1/2 flex flex-col md:flex-row'>
        <div className='pr-24'>
          <h2 className='text-2xl font-bold'>Links</h2>
          <ul className='space-y-2 mt-4'>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>

        </div>
        <div className='pr-24'>
          <h2 className='text-2xl font-bold'>Links</h2>
          <ul className='space-y-2 mt-4'>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>

        </div>
        <div className='pr-24'>
          <h2 className='text-2xl font-bold'>Links</h2>
          <ul className='space-y-2 mt-4'>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>

        </div>

      </div>
      <div className='w-1/4 flex justify-end gap-4'>
        <button>
        <svg className='w-6 h-6' viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"/>
        <path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#ffffff"/></svg>
        </button>
        <button><svg className='w-6 h-6' viewBox="126.444 2.281 589 589" xmlns="http://www.w3.org/2000/svg"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"/>
        <path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" fill="#ffffff"/></svg>
        </button>
        <button>
          <svg className='w-6 h-6' viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"/><stop offset=".78" stop-color="#d82d7e"/></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"/><stop offset="1" stop-color="#8c3aaa"/></radialGradient></defs><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)"/><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)"/>
          <path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff"/>
          </svg>
        </button>


      </div>

    </div>
   </footer>
     
    </>
  )
}

export default App
