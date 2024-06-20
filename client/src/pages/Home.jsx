import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

SwiperCore.use([Navigation]);

export default function Home() {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [exclusiveListings, setExclusiveListings] = useState([]);
  const [premiumListings, setPremiumListings] = useState([]);

  useEffect(() => {
    const fetchFeaturedListings = async () => {
      try {
        const res = await fetch('/api/listing/get?category=featured&limit=4');
        const data = await res.json();
        setFeaturedListings(data);
        fetchExclusiveListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchExclusiveListings = async () => {
      try {
        const res = await fetch('/api/listing/get?category=exclusive&limit=4');
        const data = await res.json();
        setExclusiveListings(data);
        fetchPremiumListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPremiumListings = async () => {
      try {
        const res = await fetch('/api/listing/get?category=premium&limit=4');
        const data = await res.json();
        setPremiumListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeaturedListings();
  }, []);

  return (
    <div>
      {/* Top section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Discover your next <span className='text-slate-500'>dream</span>
          <br />
          home with ease
        </h1>
        <div className='text-gray-400 text-base sm:text-lg'>
          Welcome to VishwendraDreamHomes, your premier destination to find your next dream home. Whether you're searching for a cozy apartment, a luxurious villa, or a spacious family house, we offer an unparalleled selection of exquisite properties to suit every lifestyle.
          <br />
          Our dedicated team of real estate experts is committed to helping you find the perfect home that meets your needs and aspirations. Explore our diverse range of listings and embark on a journey to discover your ideal living space today.
        </div>
        <Link
          to={'/search'}
          className='text-sm sm:text-base text-blue-800 font-bold hover:underline mt-4'
        >
          Start Your Home Search
        </Link>
      </div>

      {/* Swiper section */}
      <Swiper navigation>
        {featuredListings &&
          featuredListings.length > 0 &&
          featuredListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listing results for featured, exclusive, and premium categories */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {featuredListings && featuredListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Featured Listings</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?category=featured'}>
                See more featured listings
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {featuredListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {exclusiveListings && exclusiveListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Exclusive Listings</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?category=exclusive'}>
                See more exclusive listings
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {exclusiveListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {premiumListings && premiumListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Premium Listings</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?category=premium'}>
                See more premium listings
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {premiumListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
