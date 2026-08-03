import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import * as productService from './services/server'

import NavBar from './components/NavBar'
import ProductList from './pages/ProductList'
import ProductForm from './pages/ProductForm'

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


  return (
    <main>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<h2>Welcome to the Students Directory</h2>} />

        <Route path='/products' element={<ProductList products={products}/>}/>

        <Route path='/products/new' element={<ProductForm addProduct={addProduct}/>}/>
      
      </Routes>

      
  
    </main>
  )
}

export default App
