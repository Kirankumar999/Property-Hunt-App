import React from 'react'
import PropertyAddForm from '@/components/PropertyAddForm'

const page = () => {
  return (
    <section className="bg-yellow-400">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-slate-100 text-black px-6 py-8 mb-4 shadow-lg rounded-xl border m-4 md:m-0"
        >
        <PropertyAddForm />
        </div>
      </div>
    </section>
  )
}

export default page