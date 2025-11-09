import { useState, useRef } from 'react'
import HeadphonesYellow from '../assets/images/headphonesYellow.png'
import HeadphonesRed from '../assets/images/headphonesRed.png'
import HeadphonesGreen from '../assets/images/headphonesGreen.png'



function Carousel() {
  const [index, setIndex] = useState(1);
  const [translate, setTranslate] = useState("0")
  const imgRef = useRef(null);

  const changeImage = (i) => {
    setIndex(i);
    const width = imgRef.current.clientWidth.toString()
    if ( i === 0) {
      setTranslate(width)
    } else if ( i === 2 ) {
      setTranslate("-" + width)
    } else {
      setTranslate("0")
    }
  }

  return (
    <div className='carousel'>
        <div className='colors' style={ {translate: `${translate}px`} } >
            <img className={ index === 0 ? "show" : "backImg" } src={HeadphonesYellow} ref={imgRef}/>
            <img className={ index === 1 ? "show" : "backImg" } src={HeadphonesGreen} />
            <img className={ index === 2 ? "show" : "backImg" } src={HeadphonesRed} />
        </div>
        <div className='controls'>
            <button aria-label='select yellow color' className={"color-pick-yellow " + (index === 0 ? "picked" : "")} onClick={ () => changeImage(0) }></button>
            <button aria-label='select green color' className={"color-pick-green " + (index === 1 ? "picked" : "")} onClick={ () => changeImage(1) }></button>
            <button aria-label='select red color' className={"color-pick-red " + (index === 2 ? "picked" : "")} onClick={ () => changeImage(2) }></button>
        </div>
    </div>
  )
}
export default Carousel