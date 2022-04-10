import { NextPage } from 'next'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const search: NextPage = () => {
  return (
    <>
      <Header />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in Seoul</h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default search
