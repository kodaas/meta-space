import React from 'react'
import astronaut from '../assets/astronaut.png'

export default function Header() {
  return (
    <header className='p-8 pt-8 space-y-5'>

      <article className='text-center space-y-7'>

        <h1 className='text-6xl font-semibold leading-[4.3rem]'>Find your <span className='text-[#44ccb5]'>Space</span> in Metaverse</h1>

        <p className='text-gray-300/80 font-bold text-lg'>The MetaSpace studio focus on opening portals to digital spaces for our partners.</p>

        <button className='px-10 py-3 cursor-pointer active:scale-95 bg-[#36a38f] font-bold text-base rounded-full'>Get in Touch</button>

      </article>

      <section className='mx-auto w-fit'>
        <img src={astronaut} alt="astronaut" />
      </section>

    </header>
  )
}
