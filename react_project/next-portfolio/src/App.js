import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import avatar from './avatar.png'
// remember that we have to set the font, here and in taiwind.config.js

function App() {
  return (
    <div className="App">
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>  
            <h1 className='text-xl'>Hello</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li className='bg-gradient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                <a href="#about">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Campagnolo alberto</h2>
            <h3 className='text-2xl py-2 pt-5'>Freelance developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Freelancer providing services for programming content needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-5'>
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          <div className='relative w-60 h-60 mt-20 mx-auto'>
            <img src={avatar} alt="Avatar"/>
          </div>
        </section>
        <div className='text-center'>
          <h3 className='text-3xl py-5 text-teal-600 font-medium'>Services I offer</h3>
          <p className='text-xl py-2 leading-8 text-gray-800'>
            Since the beginning of my journey as a freelance developer, I've done work for <span className='text-teal-500'>startups</span> and <span className='text-teal-600'>agencies</span> and collaborated with people to create digital products for business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800'>
            I offer a wide range of services, including programming and teaching.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
