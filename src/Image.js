import product from './product'

function Image() {
  return (
    <div>
      <img src={product.image}></img>
    </div>
  )
}

export default Image