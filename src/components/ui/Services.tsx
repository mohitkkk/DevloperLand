import React from 'react'
import { AnimatedPinDemo } from "../ui/AnimatedPinDemo"

export const Services = () => {
  return (
    <div>
        <div className=' text-gray-300 z-50'>
            <div className='max-w-7xl mx-auto py-7 lg:py-7 px-4 '></div>
            <span className='text-center text-gray-300 justify-center'>
                <h1 className='text-6xl font-bold'>Services</h1>
            </span>
            <div className='flex flex-row justify-center mx-14'>
                <div className='flex flex-col justify-left '><AnimatedPinDemo /></div>
            </div>
        </div>
    </div>
  )
}
