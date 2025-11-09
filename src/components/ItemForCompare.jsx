import { Link } from "react-router-dom"
import none from '../assets/icons/0.png'
import i1 from '../assets/icons/1.png'
import i2 from '../assets/icons/2.png'
import i3 from '../assets/icons/3.png'
import i4 from '../assets/icons/4.png'
import i5 from '../assets/icons/5.png'
import i6 from '../assets/icons/6.png'
import i7 from '../assets/icons/7.png'
import i8 from '../assets/icons/8.png'
import i9 from '../assets/icons/9.png'
const icons = [i1, i2, i3, i4, i5, i6, i7, i8, i9]

const ItemForCompare = ({ item, image }) => {
  const specsArray = Object.values(item).slice(3, 12)
  return (
    <div className="compare">
        <div className="compare-item">
          <h2>{item.name}</h2>
          <img src={image} alt={`${item.name} picture`} />
          <p>{`Starting at ${item.price}`}</p>
          <Link to={'/tech-specs'} className="active-navbar">Buy now</Link>
        </div>
      <div className="specs">
        {specsArray.map( (spec, index) => {
          return (
            <div className="spec" key={index}>
              <img alt="" aria-hidden="true" src={spec === "None" ? none : icons[index]} />
              <p>{spec}</p>
            </div>
          )
        } )}
      </div>
    </div>
  )
}
export default ItemForCompare