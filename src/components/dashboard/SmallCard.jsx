import React from 'react'

const SmallCard = (props) => {
    const {title, img, number} = props
  return (
    <>
    <div className='flex :flex-row bg-white w-full md:1/2 lg:1/4 mx-2 p-4 mt-2 lg:mt-0'>
        <img className='mx-auto' src={img} alt="" />
        <div className='flex flex-col mx-auto'>
            <div className='mb-3 text-2xl font-bold'>{number}</div>
            <div className='text-lg'>{title}</div>
        </div>
    </div>
    </>
  )
}

export default SmallCard