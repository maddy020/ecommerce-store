import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import {addToBasket,removeFromBasket} from "../slices/basketSlice"; 
function CheckoutProduct({key,
    id,
    title,
    rating,
    price,
    description,
    category,
    image,
    hasPrime}) {
      const dispatch=useDispatch();
      const addItemsToBasket=()=>{
        const product={
          id,
          title,
          rating,
          price,
          description,
          category,
          image,
          hasPrime,
        }
        dispatch(addToBasket(product));
      }
      const removeItemsFromBasket=()=>{
        dispatch(removeFromBasket({id}));
      }
  return (
    <div className='grid grid-cols-5'>
    <Image src={image} height={200} width={200}  objectFit='contain' alt="Image"/>
    
    <div className='col-span-3 mx-5 ' >
    <p>{title}</p>
    <div className='flex'>
    {Array(rating).fill().map((_,i)=>(
            <StarIcon className='h-5 text-yellow-500'/  >
        ))}
        </div>
        <p className='text-xs my-2 truncate'>{description}</p>
        <div className='font-semibold text-md'>{`$${price}`}</div>
        {hasPrime && 
          (
         <div className='flex items-center space-x-2'>
           <img className='w-12' src="https://links.papareact.com/fdw" alt="Image" />
            <p className='text-xs text-gray-500'>Free Next-day Deleivery</p>
         </div>)}
         </div>
      <div className='flex flex-col justify-self-end  my-auto space-y-2'>
        <button className='button' onClick={addItemsToBasket}>Add to Basket</button>
        <button className='button 'onClick={removeItemsFromBasket}>Remove from Basket</button>
      </div>
    
    </div>
  )
 
}

export default CheckoutProduct
