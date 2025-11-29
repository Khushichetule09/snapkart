'use client'
import React from 'react'
import { motion } from "motion/react"
import { ShoppingBasket } from 'lucide-react'
function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
      initial={{
        opacity:0,
        y:-20
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:2
      }}
      >
        <h1 className='text-4xl md:text-5xl font-extrabold text-green-700'>SnapKart</h1>
        <ShoppingBasket />
        </motion.div>
      </div>
  )
}

export default Welcome
