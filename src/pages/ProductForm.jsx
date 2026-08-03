import { useState } from "react"
import { useNavigate } from "react-router"
import ProductList from "./ProductList"

const ProductForm = (props) => {
    const navigate = useNavigate()

    const initialState = {
        title: "" ,
        description: "" ,
        category: "" ,
        price: "",
        quantity: "",
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await props.addProduct(formData)
        setFormData(initialState)
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

                <button type="submit"> add new product</button>

            </form>

        </div>
    )

}

export default ProductForm