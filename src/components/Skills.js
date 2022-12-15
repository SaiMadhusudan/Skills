import React from 'react'
import Cimage from './Csvg.png'
import Cplusimage from './C++.svg.png'
import Htmlimage from './html5.png'
import Cssimage from './css3.png'
import JSimage from './js.png'
import SQLimage from './sql.png'
import Mongodbimage from './mongodb.png'
import nodeimage from './node.png'
import pythonimage from './python.png'
import x86image from './x86.png'
import jqimage from './jquery.png'
import arduinoimage from './arduino.png'
import bashimage from './bash.png'
import githubimage from './github.png'
import gitimage from './git.png'
import reactimage from './logo192.png'


export default function Skills() {
  return (
   <>
   <div className='bg-zinc-800 text-slate-120 h-max'>
     <div className='w-3/5 m-auto pt-18 mb-2 p-6'>
        <h1 className='font-bold text-3xl text-cyan-400 font-Import2'>Skills I possess</h1>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50  rounded-xl' src={Cimage} alt="" />C</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={Cplusimage} alt="" />C++</a>
        </div>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={Htmlimage} alt="" />HTML</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={Cssimage} alt="" />CSS</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={JSimage} alt="" />JS</a>
        </div>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={jqimage} alt="" />jQuery</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={nodeimage} alt="" />Node</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={SQLimage} alt="" />SQL</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={Mongodbimage} alt="" />Mongodb</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={reactimage} alt="" />React</a>
        </div>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={githubimage} alt="" />Github</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={gitimage} alt="" />Git</a>
        </div>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={pythonimage} alt="" />Python</a>
        </div>
        <div className='flex flex-row justify-center items-center  text-center pb'>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={arduinoimage} alt="" />Arduino</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={x86image} alt="" />x86</a>
        <a className='text-white font-bold text-2xl' href=""><img className='h-24 m-3 border-rose-50 rounded-xl' src={bashimage} alt="" />Bash</a>
        </div>

    </div>
    </div>
   </>
  )
}
