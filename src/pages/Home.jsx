import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // catatan State untuk menyimpan halaman saat ini

    useEffect(() => {
        getData(currentPage); // catatan Panggil getData dengan currentPage saat ini
    }, [currentPage]);

    async function getData(page) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=19eb725e1aaad836ece900fa990c944c&language=en&page=${page}`);
        const data = await response.json();
        setMovies(data.results || []);
    }

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className='flex flex-col '>
            <Navbar/>
            <div className='flex gap-[24px] flex-wrap'>
                {movies.map((item) => (
                    <div key={item.id} className="flex flex-col gap-[16px] p-[16px] shadow-lg w-fit rounded-md hover:scale-[1.1] hover:cursor-pointer bg-white">
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="judul" className="w-[200px] rounded-md" />
                        <h3 className='  '>  {item.original_title}</h3>
                    </div>
                ))}
            </div>
        
            <div className='gap-10 flex mt-[24px] justify-center '>
                <button className='bg-white text-red-600 rounded px-[16px] py-[8px]' onClick={handlePrevClick}>PREV</button>
                <button className='bg-white text-red-600 rounded px-[16px] py-[8px]' onClick={handleNextClick}>NEXT</button>
            </div>
        </div>
    );
};

export default Home;
