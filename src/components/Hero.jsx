import React from 'react'
import HeroCards from './HeroCards'
import HeroLatestNews from './HeroLatestNews'

const Hero = () => {
  return (
    <main className='max-w-7xl mx-auto mt-8 lg:mt-24 font-newsreader'>
        <HeroCards />
        <HeroLatestNews />
    </main>
  )
}

export default Hero