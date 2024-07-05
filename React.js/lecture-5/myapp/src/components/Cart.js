import React from 'react'
 
const Card = (props) => {
  return (

     <div className='rounded-xl shadow-lg m-5  transition duration-500 w-80'>
        <img src={props.image} alt="" className='object-cover w-80 h-80 rounded-t-xl' />
        <div className='px-4 py-3 w-80'>
            <p className='font-bold text-lg truncate'>GYM packge</p>
            <div className='flex items-center'>
               <p className='my-3 text-lg font-semibold '>{props.curPrice}</p>
               <del className='text-sm ml-2 font-semibold text-gray-600'>{props.delPrice}</del>
            </div>
        </div>
     </div>
  )
}

export default Card 