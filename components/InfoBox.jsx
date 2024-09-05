import React from 'react'

const InfoBox = ({infoBoxTitle, infoBoxDetails, infoBoxButtonTitle}) => {
  return (
    <div>
        <h2 className="text-2xl font-bold">{infoBoxTitle}</h2>
            <p className="mt-2 mb-4">
              {infoBoxDetails}
            </p>
            <a
              href="/properties"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              {infoBoxButtonTitle}
            </a>
    </div>
  )
}

export default InfoBox