import Card from './Card'
import img1 from '../assets/images/cardImg1.png'
import img2 from '../assets/images/cardImg2.png'
import img3 from '../assets/images/cardImg3.png'
import { useRef, useEffect } from 'react'

const FeatureSection = () => {
    const paragraphs = [ 
        "Deep lows. Lush mids. Airy highs. All perfectly in balance.",
        "Silence distractions. Control everything with a gentle tap.",
         "Thoughtfully packed in plastic-free, high quality materials." ]

    const images = [img1, img2, img3]

    const backgrounds = [ 
        { background: 'linear-gradient(180.00deg, rgba(210, 205, 198, 1),rgba(248, 191, 147, 1) 100%)' },
        { background: "linear-gradient(180.00deg, rgba(210, 205, 198, 1),rgba(242, 235, 227, 1) 100%)" },
        { background: "linear-gradient(180.00deg, rgba(216, 183, 75, 1),rgba(242, 235, 227, 1) 100%)" }
    ]

    const scrollDiv = useRef(null);

    useEffect(() => {
      const scrollAnim = setInterval(() => {

        const cardWidth = scrollDiv.current.firstChild.offsetWidth + 16;
        const amountOfCards = scrollDiv.current.childElementCount;

        if ( ((scrollDiv.current.scrollLeft) / (cardWidth * (amountOfCards - 1))).toFixed(2) >= 0.99 ) {
          scrollDiv.current.scrollLeft = 0;
        } else {
          scrollDiv.current.scrollBy( {
            left: cardWidth,
            behavior: 'smooth'
          } )
        }
      }, 4000) 

      return () => clearInterval(scrollAnim);

    }, [])
  return (
    <section className='feature-section' ref={scrollDiv} >
        <Card text={paragraphs[0]} img={images[0]} bg={backgrounds[0]} />
        <Card text={paragraphs[1]} img={images[1]} bg={backgrounds[1]} />
        <Card text={paragraphs[2]} img={images[2]} bg={backgrounds[2]} />
        <Card text={paragraphs[0]} img={images[0]} bg={backgrounds[0]} />
    </section>
  )
}
export default FeatureSection