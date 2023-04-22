import Image from 'next/image'
import { Inter } from 'next/font/google'
import First from './components/First'
import Second from './components/Second'
import Tirth from './components/third'
import Four from './components/four'
import Five from './components/Fiver'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
  <span className="text on">BR</span>
  <span className="text off">US</span>
</label>
      <First />        
      <Second /> 
      <Tirth />
      <Four />
      <Five />
      <Footer />
    </div>
  )
}
