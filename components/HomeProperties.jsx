import React from 'react'
import PropertyCard from './PropertyCard';

async function fetchProperties() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
        console.log(res);
        if (!res.ok) {
          throw new Error('Failed to Fetch Data');
        }
        return res.json(); 
    } catch (error) {
      console.log(error);
    }
  }

const HomeProperties = async () => {
  const properties = await fetchProperties();
  if (!properties) {
    return <p> No Properties</p>;
  }
  const recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <section className="px-4 py-6 bg-yellow-400">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.map(property => (
                <PropertyCard key={property._id} property={property}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProperties