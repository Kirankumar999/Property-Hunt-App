import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
    const onBrowsePropertyClick = () => {
        console.log('Renter CLicked');
    }
    const onAddPropertyClick = () => {
        console.log('Owner CLicked');
    }

  return (
    <section className="bg-yellow-400">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <InfoBox
            infoBoxTitle='For Renters'
            infoBoxDetails='Find your dream rental property. Bookmark properties and contact
            owners.' 
            infoBoxButtonTitle='Browse Properties'
            onForRenterClick={onBrowsePropertyClick}/>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <InfoBox
            infoBoxTitle='For Property Owners'
            infoBoxDetails='List your properties and reach potential tenants. Rent as an
            airbnb or long term.' 
            infoBoxButtonTitle='Add Property'
            onForRenterClick={onAddPropertyClick}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes