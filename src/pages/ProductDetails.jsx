import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router"
import { Link } from "react-router"

const ProductDetails = (props) => {

    const {productId} =useParams()
    const navigate = useNavigate()
    
    const product = props.products.find((foundProduct) => {
        return foundProduct._id === productId
    })

    if (props.isLoading) {
        return <p>Loading product...</p>
    }

    if (!product) {
        return <h2>product not found.</h2>
    }

    const handleDelete = async () => {
        await props.deleteProduct(productId)
        navigate('/products')
         if (props.isLoading) {
        return <p>Loading product...</p>
    }

    }


    return(

        <div>
            <br />
            
               <h2> {product.title}</h2>

               <div className="detailContent">
               <p> Price :{product.price}</p>
               <p> category :{product.category}</p>
               <p> quantity :{product.quantity}</p>
               <p className="description"> description:{product.description}</p>
               </div>

            <div className="detailButtons">
               <button onClick={handleDelete}>Delete Product</button>
               <Link to={`/products/${productId}/edit`}>
               <button> Edit {product.title}</button>
               </Link>
            </div>
        </div>
    )
}

export default ProductDetails