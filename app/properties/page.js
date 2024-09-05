import React from 'react'
import PropertyCard from '@/components/PropertyCard'

async function fetchProperties() {
  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
      console.log("This is response recieved from Component", res);
      if (!res.ok) {
        throw new Error('Failed to Fetch Data');
      }
      return res.json();
  } catch (error) {
    console.log(error);
  }
}
const propertiesPage = async () => {
  const properties = await fetchProperties();
  return (
      <section className="px-4 py-6 bg-yellow-400">
        <div className="container-xl lg:container m-auto">
        <div class="bg-white shadow-lg py-4 px-8 mb-6 rounded-lg mx-auto max-w-7xl">
        <div class="flex flex-wrap items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
            <div class="flex flex-col">
                <label class="font-semibold text-gray-700 mb-1">Location</label>
                <div class="relative">
                    <select class="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">All Locations</option>
                        <option value="new-york">New York</option>
                        <option value="san-francisco">San Francisco</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                    </select>
                    <svg class="absolute top-1/2 right-4 w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            <div class="flex flex-col">
                <label class="font-semibold text-gray-700 mb-1">Price Range</label>
                <div class="flex items-center space-x-2">
                    <input type="text" placeholder="Min" class="border border-gray-300 rounded-lg px-4 py-2 w-20 text-center text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <span class="text-gray-500">-</span>
                    <input type="text" placeholder="Max" class="border border-gray-300 rounded-lg px-4 py-2 w-20 text-center text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
            </div>
            <div class="flex flex-col">
                <label class="font-semibold text-gray-700 mb-1">Property Type</label>
                <div class="relative">
                    <select class="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                    </select>
                    <svg class="absolute top-1/2 right-4 w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            <div class="flex flex-col">
                <label class="font-semibold text-gray-700 mb-1">Bedrooms</label>
                <div class="relative">
                    <select class="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Any</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5">5+ Bedrooms</option>
                    </select>
                    <svg class="absolute top-1/2 right-4 w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            <div class="flex flex-col justify-end">
                <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-300">
                    <span>Apply Filters</span>
                </button>
            </div>

        </div>
    </div>
        {!properties ? (<p> No Properties</p>) :
        (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                key={property._id}
                propertyKey ={property._id}
                property={property}
                />
              ))}
          </div>
            )}
        </div>
      </section>
  )
}

export default propertiesPage