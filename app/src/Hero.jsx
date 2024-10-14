import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes,faBars} from '@fortawesome/free-solid-svg-icons'
import {FaChartLine, FaChartPie, FaClock, FaFileAlt, FaFlag, FaRobot} from 'react-icons/fa'
const Hero = () => {
    const features=[
        {
            icon:<FaChartLine size={28} className='text-purple-500'/>,
            title:'Realtime Dashboard',
            description:'Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.'
        },
        {
            icon:<FaFlag size={28} className='text-purple-500'/>,
            title:'Realtime Dashboard',
            description:'Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.'
        },,
        {
            icon:<FaFileAlt size={28} className='text-purple-500'/>,
            title:'Realtime Dashboard',
            description:'Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.'
        },
        {
            icon:<FaRobot size={28} className='text-purple-500'/>,
            title:'Realtime Dashboard',
            description:'Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.'
        },
    ]

    const[isMenuOpen,setIsMenuOpen]=useState(false)

    const toggleMenu=() =>{
        setIsMenuOpen(!isMenuOpen)
    }
    
  return (
    <>
    <div className='bg-[#0d0c1d] min-h-screen overflow-hidden'>
       <nav className='flex justify-between items-center px-6 py-6 lg:px-12 relative'>
        <div className='flex items-center space-x-2'>
            <span className='text-pink-500 font-bold text-4xl'>B</span>
            <span className='text-white font-semibold text-3xl'>AL</span>
        </div>

        <div className='lg:hidden'>
            <button className='text-white'onClick={toggleMenu}><FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/></button>
        </div>

        <ul className={`${isMenuOpen ? "block" : "hidden" } lg:flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:space-y-0 text-lg text-white absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#0d0c1d] lg:bg-transparent p-4 lg:p-0 z-10` }>
            <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>Home</li>
            <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer  transition-all'>About</li>
            <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer  transition-all'>Services</li>
            <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer  transition-all'>Projects</li>
            <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer  transition-all'>Contact</li>
        </ul>

        <button className='hidden lg:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-80 text-lg font-medium'>Contact Us</button>
       </nav>

       {/*HERO SECTION*/}

       <div className='flex flex-col items-center justify-center text-center py-24 px-4'>
        <h1 className='text-6xl font-bold text-white'>Advanced Analytics To<br/>
          <span className='gradient-text text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Grow Your Business</span>
        </h1>
        <p className='text-gray-400 mt-6 max-w-xl text-xl'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
        <div className='mt-10 flex space-x-6'>
        <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-80 text-lg font-medium'>Get Started</button>
        <button className='bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 text-lg font-medium'>Learn More</button>
       
       </div>
       </div>
      
    </div>

    <section className='bg-[#0d0c1d]  px-4'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0'>
          <div className='bg-[#12122b] p-8 rounded-lg shadow-lg'>
            <img src="img1.png"></img>
          </div>
        </div>

        <div className='w-full lg:w-1/2 px-4'>
          <h2 className='text-4xl text-white font-semibold mb-6'>Detailed Analysis To Make Big Decisions</h2>
         <p className='text-gray-400 mb-8'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
       
         <div className='space-y-8'>
            <div className='flex items-start'>
                <FaChartPie size={32} className='text-purple-500 mr-4'/>
                <div>
                    <h3 className='text-xl text-white font-semibold'>Chart Combinations</h3>
                    <p className='text-gray-400'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
                </div>
            </div>
            <div className='flex items-start'>
                <FaChartLine size={32} className='text-white mr-4'/>
                <div>
                    <h3 className='text-xl text-white font-semibold'>Chart Combinations</h3>
                    <p className='text-gray-400'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
                </div>
            </div>
            <div className='flex items-start'>
                <FaClock size={32} className='text-blue-500 mr-4'/>
                <div>
                    <h3 className='text-xl text-white font-semibold'>Chart Combinations</h3>
                    <p className='text-gray-400'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>

   <div className='bg-[#0d0c1d] py-12'>
    <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-white mb-4'>Integration</h2>
        <p className='text-gray-400 mb-10'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
        <div className='flex justify-end mb-8'>
             <button className='bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300'>VIEW ALL</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className='bg-[#0d0c1d] text-center rounded-lg p-6 shadow-lg ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0d0c1d]'> 
                <div className='flex justify-center mb-4 '>
                    
                        <img src="fb.jfif" className='h-12 rounded-full'></img>
                   
                      </div>
                      <h3 className='text-xl text-white font-semibold'>FaceBook</h3>
                    <p className='text-gray-400 mt-2'>Install tailwindcss and its peer dependencies,</p>
             
            </div>
            <div className='bg-[#0d0c1d] text-center rounded-lg p-6 shadow-lg ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0d0c1d]'> 
                <div className='flex justify-center mb-4 '>
                    
                        <img src="insta.jpg" className='h-12 rounded-full'></img>
                   
                      </div>
                      <h3 className='text-xl text-white font-semibold'>FaceBook</h3>
                    <p className='text-gray-400 mt-2'>Install tailwindcss and its peer dependencies,</p>
             
            </div>
            <div className='bg-[#0d0c1d] text-center rounded-lg p-6 shadow-lg ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0d0c1d]'> 
                <div className='flex justify-center mb-4 '>
                    
                        <img src="twit.png" className='h-12 rounded-full'></img>
                   
                      </div>
                      <h3 className='text-xl text-white font-semibold'>FaceBook</h3>
                    <p className='text-gray-400 mt-2'>Install tailwindcss and its peer dependencies,</p>
             
            </div>
            <div className='bg-[#0d0c1d] text-center rounded-lg p-6 shadow-lg ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0d0c1d]'> 
                <div className='flex justify-center mb-4 '>
                    
                        <img src="pin.png" className='h-12 rounded-full'></img>
                   
                      </div>
                      <h3 className='text-xl text-white font-semibold'>FaceBook</h3>
                    <p className='text-gray-400 mt-2'>Install tailwindcss and its peer dependencies,</p>
             
            </div>
        </div>
     </div>
   
   </div>
   <section className="bg-[#0d0c1d] py-16 px-4">
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl text-white font-semibold'>Get Better Results With</h2>
        <h3 className='text-5xl text-purple-500 font-bold mt-3'>Amazing Features</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto'>
            {features.map((feature,index) =>(
                <div key={index} className='flex items-center bg-[#12122b] p-6 rounded-lg border border-[#908fad] max-auto'>
                    <div className='w-12 h-12 flex items-center justify-center bg-[#1c1b2e] rounded-full mr-4'>
                        {feature.icon}
                    </div>
                    <h4 className='text-xl text-white font-semibold mb-2'>
                        {feature.title}
                    </h4>
                    <p className='text-gray-400 text-sm'>{feature.description}</p>

                </div>
            ))}
        </div>
      </div>
   </section>

   <div className='bg-[#0d0c1d] py-12'>
    <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-10'>
            <h2 className='text-4xl font-bold text-white'>Our Blogs</h2>
            <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
          <div className='flex justify-center mt-10'>
            <button className='bg-pink-500 text-white py-2 px-8 rounded-full hover:bg-pink-600'>VIEW ALL</button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0'>
            <div className='bg-[#141332] p-6 rounded-lg text-white max-w-xs shadow-lg ring-2 ring-purple-500 '>
                <img src="img1.png " className='rounded-lg mb-4'></img>
                <h3 className='text-xl font-semibold mb-2'>Start by creating a new Vite project if you don’t have one set up already. </h3>
              <p className='text-gray-400 '>Start by creating a new Vite project if you don’t have one set up already. </p>
            </div>
            <div className='bg-[#141332] p-6 rounded-lg text-white max-w-xs shadow-lg ring-2 ring-purple-500 '>
                <img src="img1.png " className='rounded-lg mb-4'></img>
                <h3 className='text-xl font-semibold mb-2'>Start by creating a new Vite project if you don’t have one set up already. </h3>
              <p className='text-gray-400 '>Start by creating a new Vite project if you don’t have one set up already. </p>
            </div>
            <div className='bg-[#141332] p-6 rounded-lg text-white max-w-xs shadow-lg ring-2 ring-purple-500 '>
                <img src="img1.png " className='rounded-lg mb-4'></img>
                <h3 className='text-xl font-semibold mb-2'>Start by creating a new Vite project if you don’t have one set up already. </h3>
              <p className='text-gray-400 '>Start by creating a new Vite project if you don’t have one set up already. </p>
            </div>
            
        </div>
    </div>
   </div>

   <div className='bg-[#0d0c1d] py-12 flex justify-center items-center'>
    <div className='bg-[#141332] max-w-4xl w-full px-8 py-6 rounded border boder-gray-600 flex flex-col md:flex-row items-center justify-between space-y-4 space-x-6'>
        <div className='text-left'>
            <h2 className='text-2xl font-bold text-white'>Subscribe Our Newsletter</h2>
            <p className='text-gray-400 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
        </div>

        <div className='flex items-center space-x-4 w-full md:w-auto'>
            <input type="emal" placeholder='Enter Email' className='bg-[#0c0b19] text-white border border-gray-600 rounded-full py-2 px-4 w-full md:w-auto'></input>
            <button className='bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-4 w-full md:w-auto font-semibold rounded-full'>Subscribe</button>
        </div>
    </div>
   </div>

   <footer className="bg-[#0b0b19] text-center py-6">
    <div className='border-t border-gray w-full'>
        <div className='text-sm text-gray-400 flex justify-between items-center max-w-screen-xl mx-auto px-4'>
            <span>Bal Template Kit By Baljinder Kaur</span>
            <span>Copyright &#9400; All rights reserved.</span>
        </div>
    </div>
   </footer>


    </>
  )
}

export default Hero
