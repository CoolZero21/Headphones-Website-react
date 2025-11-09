

const Card = ( { text, img, bg } ) => {
  return (
    <div className="card" style={ bg }>
        <h3>{text}</h3>
        <img src={img} alt="" role="presentation" />
    </div>
  )
}
export default Card