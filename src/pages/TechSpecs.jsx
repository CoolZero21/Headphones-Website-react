import data from '../products.json'
import SpecColors from '../components/SpecColors'

const TechSpecs = () => {

  const specs = data[0].techSpecs;

  return (
    <section className="tech-specs">
      <div className="spec-card">
        <h3>Color</h3>
        <SpecColors />
      </div>
      { specs.map( spec => {
        const [title, strings] = Object.entries(spec)[0]
        return <div className='spec-card' key={title}>
          <h3>{title}</h3>
          <ul>
          {
            strings.map( (string, index) => {
              return <li key={index} dangerouslySetInnerHTML={{ __html: string }} />
            } )
          }
          </ul>
        </div>
      } ) }
    </section>
  )
}
export default TechSpecs