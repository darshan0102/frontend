import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  remove_to_whishlist, empty_whishlist } from '../redux/ReduxWhishList/WhishlistAction'
import { add_to_cart } from '../redux/ReduxCart/CartAction'
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const WhishList = () => {

  const data1 =  useSelector(state =>  state.whishlist) 
   const productData =  useSelector((state => state.cart))
  

  const dispatch =  useDispatch()
  console.log('Whislist data', data1);
  console.log('Whislist to Cart data', productData);

  const handleAddToCart = (item) => {
    dispatch(add_to_cart(item));          // Add item to cart
    dispatch(remove_to_whishlist(item.id)); // Remove item from wishlist
  };
  
  return (
    <div>
      <button onClick={() => dispatch(empty_whishlist())}>Empty Whislist</button>
      <div className='flex justify-center items-center h-lvh text-center'>
        <table className='table-fixed w-[800px]'>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Add To Whishlist</th>
            <th>Remove To Whishlist</th>
          </tr>
          {
            data1.map((item) => {
              return (
                <tr key={item.id} className=''>
                  <td>
                    <img src={item.image} alt="cartimage" className='w-12 h-12' />
                  </td>
                  <td className=''>
                    <h2 className='text-wrap w-28 mx-auto line-clamp-1'>{item.title}</h2>
                  </td>
                  <td>
                    <p className='line-clamp-1'>${item.description}</p>
                  </td>
                  <td>
                    <button 
                      onClick={() => handleAddToCart(item)} 
                      className='bg-yellow-300 hover:bg-green-600 transition duration-300 hover:text-white border border-black text-base font-semibold px-3 py-2 flex rounded justify-center items-center mx-auto'>
                      Add to Cart<IoCartOutline/>
                    </button>
                  </td>
                  <td>
                    <button 
                      onClick={() => dispatch(remove_to_whishlist(item.id))} 
                      className='bg-blue-300 hover:bg-red-600 transition duration-300 hover:text-white border border-black text-2xl font-semibold px-3 py-2 flex rounded justify-center items-center mx-auto'>
                      <MdDelete/>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>

    </div>
  )
}

export default WhishList