import { Link } from "react-router"

const ProductList = (props) => {
console.log(props.products);

    return(
        <div>
            <>
        {props.products.map((product) => (
          <h1>{product.title}</h1>
        ))}
         </>
          
        
        </div>
    )
}

export default ProductList