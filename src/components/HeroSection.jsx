import Headphones from '../assets/images/HeadphoneImage.png'
import HeadphonesMobile from '../assets/images/HeadphoneImageMobile.png'
import { useMediaQuery } from 'react-responsive'


const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 705 })
  return (
    <section className='hero'>
        <div className="hero-wrapper">
          <div className='hero-image'>
              <h1>Resonance </h1>
              <h1 className='h1-shadow'>Resonance </h1>
              <span className='text-behind'>Aura Pro II</span>
              <img src={isMobile ? HeadphonesMobile : Headphones} alt="White headphones image" />
          </div>
        </div>
    </section>
  )
}
export default HeroSection