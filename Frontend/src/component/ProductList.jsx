import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts();
    }, [])

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:5000/products')
        setProducts(response.data)
    }

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`)
        getProducts()
    }

  return (
    <div>  
    <h1 className='title'>Products</h1>
    <h1 className='subtitle'>Product List...</h1>
    <Link to="/products/add" className="button is-primary mb-2"> </Link>
    <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>no</th>
                <th>product name</th>
                <th>price</th>
                <th>created by</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (

            <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>
                    <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info"></Link>
                    <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger"></button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default ProductList