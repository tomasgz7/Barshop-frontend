import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';


const endpoint = 'http://127.0.0.1:8000/api'
const ShowProducts = () => {
    const  [ products, setProducts ] = useState([]);
        useEffect ( () => {
            getAllProducts()
        }, [])
        

    const getAllProducts = async () => {
       const response = await axios.get(`${endpoint}/products`)
       setProducts(response)
    }

    const deleteProduct = async (id) => {
      await axios.delete(`${endpoint}/product/${id}`) 
      getAllProducts ()
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success  btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
    </div>
  )
}

export default ShowProducts