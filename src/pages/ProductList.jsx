import { Link } from "react-router"

const ProductList = (props) => {
console.log(props.products);

    return(
        <div>
           
            <>
            
        {props.products.map((product) => (
            <>
            <Link to={`/products/${product._id}`}>
            <button>
          <h2>{product.title}</h2>
        
          <p> Price: {product.price} </p>
          <p> category: {product.category} </p>
          </button>
          </Link>
          </>
        ))}
         </>
          
        
        </div>
    )
}

export default ProductList