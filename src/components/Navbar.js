import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='bg-gradient-to-r from-zinc-300 to-zinc-700 pb-20'>
    <div className='float-left'>
    <div className="font-bold list-none flex flex-row flex-wrap text-lg py-2 justify-center pl-24">
                <p className='p-4 font-Import2'>-Sai Madhusudan Gunda-</p>   
        </div>
    </div>
    <div className='flex flex-row float-right pr-24'>
            <div className='font-bold list-none flex flex-row flex-wrap text-lg py-2 justify-center float-right'>
                <li className='p-4 underline hover:underline-offset-8 font-Import2 decoration-black hover:decoration-white'> <a href="https://saiwebsiteabout.onrender.com">About</a></li>
                <li className='p-4 underline hover:underline-offset-8 font-Import2 decoration-black hover:decoration-white'> <a href="/">Skills</a></li>
                <li className='p-4 underline hover:underline-offset-8 font-Import2 decoration-black hover:decoration-white'> <a href="https://resume.io/r/U0C2NLu8y">Resume</a></li>
                <li className='p-4 underline hover:underline-offset-8 font-Import2 decoration-black hover:decoration-white'> <a href="https://saiwebsiteconnect.onrender.com/">Connect</a></li>
            </div>
        </div>
        </div>
    </>
  )
}
