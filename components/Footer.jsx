import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-yellow-400 py-4 mt-auto">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4">
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/terms.html">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-black-500 mt-2 md:mt-0">
            &copy; 2024 PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer