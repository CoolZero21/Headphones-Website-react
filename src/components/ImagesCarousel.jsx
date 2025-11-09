import img1 from '../assets/images/carouselItem1.png'
import img2 from '../assets/images/carouselItem2.png'
import img3 from '../assets/images/carouselItem3.png'
import img4 from '../assets/images/carouselItem4.png'
import img5 from '../assets/images/carouselItem5.png'
import img6 from '../assets/images/carouselItem6.png'
import { useRef, useEffect } from 'react'

const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

const ImagesCarousel = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const imgWidth = divRef.current.children[0].clientWidth + 16;
        const carouselAnim = setInterval( () => {

            if ( ((divRef.current.scrollLeft) / (imgWidth * (images.length - 3))).toFixed(2) >= 0.99 ) {
                divRef.current.scrollLeft = 0;
            } else {
                divRef.current.scrollBy({
                    left: imgWidth,
                    behavior: "smooth"
                });
            }
        }, 2000);
        
        return () => clearInterval(carouselAnim);

    }, [])

  return (
    <div className='image-carousel' ref={divRef} >
        {images.map( (img, index) => (
            <img src={img} key={index} alt="carousel item" />
        ))}
    </div>
  )
}
export default ImagesCarousel