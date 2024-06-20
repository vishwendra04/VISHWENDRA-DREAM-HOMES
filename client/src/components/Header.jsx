import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-gray-300'>Vishwendra</span>
            <span className='text-gray-100'>DreamHomes</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-gray-800 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-gray-700 text-white focus:outline-none w-24 sm:w-64 px-3 py-2 rounded-lg'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit' className='ml-2 bg-gray-700 text-white px-3 py-2 rounded-lg'>
            <FaSearch className='text-gray-400' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/' className='text-gray-300 hover:text-gray-100'>
            <li className='hidden sm:inline'>Home</li>
          </Link>
          <Link to='/about' className='text-gray-300 hover:text-gray-100'>
            <li className='hidden sm:inline'>About</li>
          </Link>
          <Link to='/profile' className='text-gray-300 hover:text-gray-100'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
