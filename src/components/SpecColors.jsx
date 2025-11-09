import { useState } from 'react'
import HeadphonesYellow from '../assets/images/headphonesYellow.png'
import HeadphonesRed from '../assets/images/headphonesRed.png'
import HeadphonesGreen from '../assets/images/headphonesGreen.png'

const SpecColors = () => {
    const images = [HeadphonesYellow, HeadphonesGreen, HeadphonesRed]
    const [index, setIndex] = useState(1);
    const changeImage = (i) => {
        setIndex(i);
    }
    return (
        <div className="color-pick">
            <img src={images[index]} alt="Headphones color" />
            <div className='controls'>
                <button className={"color-pick-yellow " + (index === 0 ? "picked" : "")} onClick={ () => changeImage(0) }></button>
                <button className={"color-pick-green " + (index === 1 ? "picked" : "")} onClick={ () => changeImage(1) }></button>
                <button className={"color-pick-red " + (index === 2 ? "picked" : "")} onClick={ () => changeImage(2) }></button>
            </div>
        </div>
    )
}
export default SpecColors