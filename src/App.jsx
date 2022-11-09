// import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Header from './components/Header'
import bg from './assets/bg.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='relative h-full overflow-hidden'>
      <span className='absolute blur-sm -z-10 w-full h-full bg-slate-500'>
        <img className='object-cover w-full h-full' src={bg} alt="Background" />
      </span>
      <Nav />
      <Header />
    </main>
  )
}

export default App


// font-[montserrat]
// font-[chillax-variable]