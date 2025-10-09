import React from 'react'
import { allMovies, languages } from '../../utils/constants'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div className='w-full md:w-3/4 p-4'>
        <div className='flex flex-wrap gap-2 mb-4'>
            {
                languages.map((lang,i) => (
                    <span key={i} className='bg-white border border-gray-200 text-[#f74362] px-3 py-1 text-sm rounded-[24px] hover:bg-gray-100 cursor-pointer'>
                        {lang}
                    </span>
                ))
            }
        </div>
        <div className='flex justify-between items-center bg-white px-6 py-6 rounded mb-6'>
            <h3 className='font-semibold text-xl'>Coming Soon</h3>
            <a href="#" className='text-red-500 text-sm font-medium flex items-center'>
                Explore Upcoming Movies <span className='ml-1'>→</span>
            </a>
        </div>

        <div className='flex flex-wrap gap-6'>
                {/* movie card */}
                {
                    allMovies.map((movie, i) => (
                        <MovieCard key={i} movie={movie}/>
                    ))
                }
        </div>
    </div>
  )
}

export default MovieList
