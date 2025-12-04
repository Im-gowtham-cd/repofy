import { useState } from 'react';
import Nav from './part/Nav.jsx'
import Cursor from './part/Cursor.jsx'
import HeroSection from './part/HeroSection.jsx'
import Card from './part/Card.jsx'
import About from './part/About.jsx'

export default function App() {
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);
  const [isCard , setIsCard] = useState(false);
  return (
    <>
      <Nav />
      <HeroSection setIsGetStartedHovered={setIsGetStartedHovered} />
      <Card setIsCard={setIsCard} />
      <About />
      <Cursor isGetStartedHovered={isGetStartedHovered} isCard={isCard} />
    </>
  )
}