import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import * as productService from './services/server'

import NavBar from './components/NavBar'
import ProductList from './pages/ProductList'
import ProductForm from './pages/ProductForm'
import ProductDetails from './pages/ProductDetails'
import UpdateProduct from './pages/UpdateProduct'

import './App.css'

// src/App.jsx

const App = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  const fetchAllProduct = async () => {
    try {
      const productData = await productService.index()
      console.log(productData,"product data");
      setProducts(productData)
      
    } catch (error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  }
  fetchAllProduct()

  }, [])

  const addProduct = async (formData) => {
    const newProduct = await productService.create(formData)
    setProducts([...products, newProduct])
  }

  const deleteProduct = async (productId) => {
    await productService.deleteProduct(productId)
    // use filter to delete
    const filteredProduct = products.filter((product) => {
    product._id !== productId
    })

  }

  const updateProduct = async (productId, formData) => {
    const updatedStudent= await productService.update(productId, formData)

    const updatedProdutArray = products.map((product) => (
      product._id === productId ? updatedStudent : product
    ))
  }


  return (
    <main>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<h2>Welcome to the Product mangment Directory</h2>} />

        <Route path='/products' element={<ProductList products={products}/>}/>

        <Route path='/products/new' element={<ProductForm addProduct={addProduct} isLoading={isLoading}/>}/>

        <Route path='/products/:productId' element={<ProductDetails products={products} isLoading={isLoading} deleteProduct={deleteProduct}/>}/>

        <Route path='/products/:productId/edit' element={<UpdateProduct products={products} isLoading={isLoading} updateProduct={updateProduct}/>}/>
      
      </Routes>
      

      
  
    </main>
  )
}

export default App
