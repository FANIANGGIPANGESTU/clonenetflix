import React from 'react'
import {useState}from 'react'

const Button = () => {
    const [page, setPage] = useState (3)
    const handlePrev = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1) 
        }
    }

    const handleNext = () => {
        setPage(prevPage => prevPage + 1)
    }
  return (
    <div className='gap-10 flex mt-[24px] justify-center px[40px] '>
            <button
                className='bg-white text-red-600 rounded px-[16px] py-[8px]'
                onClick={handlePrev}
                disabled={page === 2}
            >
                PREV
            </button>
            <button
                className='bg-white text-red-600 rounded px-[16px] py-[8px]'
                onClick={handleNext}
            >
                NEXT
            </button>
        </div>
  )
}

export default Button