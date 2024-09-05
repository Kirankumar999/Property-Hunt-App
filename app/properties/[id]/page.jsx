import React from 'react'
import connectDB from '@/config/database';
import Property from '@/models/Property';
import PropertyImage from '@/components/PropertyImage';
import {FaBed, faBath, FaRulerCombined, FaMoneyBill, FaMapMarker} from 'react-icons/fa';

const PropertyDetailsPage = async ({params}) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();
  console.log(property);
  return (
    <>
      <PropertyImage />
      <section className='bg-yellow-400'>
      <div className="container m-auto py-6 px-6 bg-yellow-400">
        <a
          href="/properties"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Properties
        </a>
      </div>
    </section>
    <section className="bg-yellow-400">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6 ">
          <main>
            <div
              className="p-6 rounded-lg shadow-md text-center md:text-left bg-slate-200"
            >
              <div className="text-gray-500 mb-4">{property.type}</div>
              <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700">
                {property.location.street} {property.location.city}  {property.location.state}
                </p>
              </div>

              <h3 className="text-lg font-bold my-6 bg-slate-300 opacity-70 rounded-md text-black p-2">
                Rates & Options
              </h3>
              <div className="flex flex-col md:flex-row justify-around">
                <div
                  className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                   <div className="text-gray-500 mr-2 font-bold">Nightly </div>
                   <div className="text-2xl font-bold text-blue-500">$ {property.rates.nightly}</div>
                </div>
                <div
                  className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                  <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                  <div className="text-2xl font-bold text-blue-500">$ {property.rates.weekly}</div>
                </div>
                <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                  <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                  <div className="text-2xl font-bold text-blue-500">${property.rates.monthly}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
              <div
                className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
              >
                <p>
                  <i className="fa-solid fa-bed"></i> {property.beds}
                  <span className="hidden sm:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> {property.baths}
                  <span className="hidden sm:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  {property.square_feet}<span className="hidden sm:inline">sqft</span>
                </p>
              </div>
              <p className="text-gray-500 mb-4">
                This is a beautiful apartment located near the commons
              </p>
              <p className="text-gray-500 mb-4">
                {property.description}
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Amenities</h3>

              <ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
              >
                {property.amenities.map((amenity) => (
                  <li key={amenity}>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i> {amenity}
                </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg shadow-md mt-6">
              <div id="map"></div>
            </div>
          </main>
          <aside className="space-y-4 items-center">       
            <button
              className="text-white bg-gray-900 hover:bg-gray-600 font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-bookmark mr-2"></i> Bookmark Property
            </button>
            <button
              className=" text-white bg-gray-900 hover:bg-gray-600 font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-share mr-2"></i> Share Property
            </button>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
              <form>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  for='name'
                >
                  Name:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'             
                  required
                />
              </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    for='phone'
                  >
                    Phone:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </>
  )
}

export default PropertyDetailsPage