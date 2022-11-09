import React from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

export default function Nav() {
  return (
      <nav className='w-full flex justify-between p-8'>
          <div className='font-[chillax-variable] font-medium text-lg'> <span className='block leading-3'>Meta</span> <span>Space</span> </div>

          <section className='hidden absolute w-full h-[100vh] bg-white/20 backdrop-blur-sm top-0 left-0'>
              
              <div className='flex flex-col justify-between gap-y-20 bg-[#36a38f] w-5/6 float-right h-full p-8 pl-12'>
                <img className='w-8 h-8 self-end fill-white' src={close} alt="Menu" />
                  <ul className='w-full mb-20 space-y-20'>
                      <li className='font-[chillax-variable] cursor-pointer text-4xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Home</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-4xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Service</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-4xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Digital Twins</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-4xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Partners</a> </li>
                  </ul>
              </div>
                            
          </section>

          <span className='sm:hidden'>
              <img className='w-8 h-8' src={menu} alt="Menu" />
          </span>

          <section className='hidden self-center justify-self-center sm:block'>
          <ul className='w-full flex'>
                      <li className='font-[chillax-variable] cursor-pointer text-xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Home</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Service</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Digital Twins</a> </li>
                      <li className='font-[chillax-variable] cursor-pointer text-xl font-medium hover:italic hover:line-through w-fit hover:bg-black p-1'> <a href="#">Partners</a> </li>
                  </ul>           
          </section>

      </nav>
  )
}
