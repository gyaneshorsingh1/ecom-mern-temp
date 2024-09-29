import React, { useEffect } from 'react'
import "./Home.css"
import Product from './Product'
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
// import { useAlert } from 'react-alert';

const Home = () => {
  // const alert = useAlert()
  const dispatch = useDispatch();
  const {products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(()=>{
    // if(error){
    //   return alert.error(error)
    // }
    dispatch(getProduct());
  }, [dispatch]);


  return (
    <>
    {loading ? <Loader /> :
    (<>
      <MetaData title="ECOMMERCE"/>
      <div className='homedash'>
          <h2 className='homeHeading'>Featured Products</h2>
      <div className='container' id='container'>
         {products && products.map((product)=> 
        
         <Product product={product}/>
        )}
  
      </div>
      </div>
      </>
    ) }
    </>
    
  )
}

export default Home