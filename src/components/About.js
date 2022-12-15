import React from 'react'
import sai from './sai.png'
import q from './q.jpg'
import q2 from './q2.jpg'
import q3 from './q3.jpg'

export default function About() {
  return (
    <>
<div className="bg-zinc-800 font-Raleway">
    <div className='w-3/5 m-auto mb-2 p-9 pt-16 text-slate-100 '>
        <h1 className='font-bold text-3xl font-Import2 text-cyan-400'>Sai Madhusudan Gunda</h1>
        <p className='mt-1 text-3xl font-Import4'>A sophomore at IIITH</p>
        <p className='text-3xl font-Import4'>Passionate to learn new things</p>
        <h1 className='text-bold text-2xl font-Import5 pt-9'>Hi there, this is Sai Madhusudan Gunda, currently pursuing a Btech degree at IIIT Hyderabad.
Majoring in Computer Science and Engineering </h1>
    </div>

    <div className='w-3/5 m-auto my-2 p-9 text-slate-100'>
        <h1 className='text-bold text-xl font-bold font-Import2 text-cyan-500'>My Educational Background </h1>
        <p className='text-xl my-2 font-medium font-Import5'>I stay in Hyderabad, and that is where I did all my education.</p>
        <ul className="list-disc pl-4 font-Montserrat">
            <li className='p-1 text-lg'>Primary School : Johnson Grammar School</li>
            <li className='p-1 text-lg'>Middle School : Johnson Grammar School</li>
            <li className='p-1 text-lg'>High School : Fiitjee</li>
            <li className='p-1 text-lg'>Grade 11 & 12 : Fiitjee</li>
            <li className='p-1 text-lg'>Presently persuing B.Tech at IIITH</li>
        </ul>
    </div>

    <div className='w-3/5 m-auto py-2 p-9 text-slate-100'>
        <h1 className='text-bold text-xl font-bold font-Import2 text-cyan-500'>My Achivements </h1>
        <ul className="list-decimal pl-5 pt-2 font-Montserrat">
            <li className='p-1 text-lg'>UGEE Exam 19 (air) ,Interview and Exam,Conducted by IIITH.This is an admission test into the University</li>
            <li className='p-1 text-lg'>JEE MAINS 5055 (air),Exam , Conducted by NTA.Admission test to major colleges in the country like IIITs,NITs etc</li>
            <li className='p-1 text-lg'>JEE ADVANCED 3240 (air) ,Exam, India's toughest examination.Admission to test to Indias most privilleged colleges 'IITs'</li>
            <li className='p-1 text-lg'>Deans List @ IIIT</li>
        </ul>
    </div>
</div>
    </>
  )
}
