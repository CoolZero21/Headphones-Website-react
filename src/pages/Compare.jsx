import ItemForCompare from '../components/ItemForCompare'
import products from '../products.json'
import itemImage1 from '../assets/images/AuraProII.png'
import itemImage2 from '../assets/images/flow2.png'
const item1 = products[0].compare
const item2 = products[1].compare

const Compare = () => {
  return (
    <section className="compare-section">
      <h2>Compare Resonance Models</h2>
      <p>Get help choosing. Chat with a Specialist.</p>
      <div className='compare-items'>
        <ItemForCompare item={item1} image={itemImage1} />
        <ItemForCompare item={item2} image={itemImage2} />
      </div>
    </section>
  )
}
export default Compare