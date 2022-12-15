import React from 'react'
import linkedin from './linkedin.png'
import git from './github.png'
import gmail from './gmail.png'

export default function Connect() {
  return (
    <>
        <div className='bg-zinc-800 h-screen flex flex-col'>
        <h1 className='text-bold text-xl font-bold font-Import2 text-cyan-500'>Contact Me</h1>
        <p className='text-white my-1 font-bold font-Import2'>sai.gunda@research.iiit.ac.in this is my email address</p>
        <div className='flex flex-row justify-center h-screen align-middle items-center  text-center pb-24'>
        <a className='text-white' href="https://www.linkedin.com/in/sai-madhusudan-gunda-45bab4223/"><img className='h-14 m-4 border-rose-50 border-2 rounded-xl' src={linkedin} alt="" />LinkedIn</a>
         <a className='text-white' href="https://github.com/SaiMadhusudan"> <img className='m-4 h-14 border-rose-50 border-2  rounded-xl' src={git} alt="" />Git-hub </a>  
        </div>
        </div>
    </>
  )
}
