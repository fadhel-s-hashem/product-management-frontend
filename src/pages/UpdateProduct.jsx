import { useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

const UpdateProduct = (props) => {

    const { productId } = useParams()
    const navigate = useNavigate()

    // same as detail page exsept (editproduct)
    const editproduct = props.products.find((foundProduct) => {
        return foundProduct._id === productId
    })

    if (props.isLoading) {
        return <p>Loading product...</p>
    }

    if (!editproduct) {
        return <h2>product not found.</h2>
    }
    //this part diffrent from the detail and similar to form 👇
    
    
    const initialState = {
        title: editproduct.title ,
        description: editproduct.description ,
        category: editproduct.category ,
        price: editproduct.price,
        quantity: editproduct.quantity,
    }
    
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
         // here add (updateProduct) instead of addProduct and (productId) also
        await props.updateProduct( productId,  formData)// make sure updateProduct accepts productId
        // to go back to index
        navigate('/products')
    }

    return(
        
        <div>
            <h2>Add a product</h2>

            <form onSubmit={handleSubmit}>
                titel:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />

                description:
                <input type="text" name="description" value={formData.description} onChange={handleChange} />

                price:
                <input type="number" name="price" value={formData.price} onChange={handleChange} />

                quantity:
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />

                category:
                <select name="category" id="category" value={formData.category} onChange={handleChange}>
                    <option value="electronics">electronics</option>
                    <option value="food">food</option>
                    <option value="clothing">clothing</option>
                    <option value="furniture">furniture</option>
                    <option value="other">other</option>
                </select>

                <button type="submit"> edit {editproduct.title} product</button>

            </form>

        </div>
    )
}

export default UpdateProduct

