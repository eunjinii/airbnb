import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>This is for portfolio</p>
        <p>Portfolio by</p>
        <p>Eunjin lee</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Next Project</p>
        <p>Airbnb</p>
        <p>Built in React & Next</p>
        <p>Server Side Rendering</p>
        <p>For Study</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>For practicing</p>
        <p>How I build React app</p>
        <p>I am familiar</p>
        <p>In Vue & Nuxt app</p>
        <p>Bonne Chance</p>
      </div>
    </div>
  )
}

export default Footer
