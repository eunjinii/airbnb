import axios from 'axios'
import { format } from 'date-fns'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'
import 'mapbox-gl/dist/mapbox-gl.css'

const Search: NextPage<SearchComponentPropsI> = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, numOfGuests } = router.query

  const formatDate = (rawDate: any): string => {
    const date = rawDate ? new Date(rawDate) : new Date()
    return format(date, 'MM월 dd일')
  }
  const dateRange = `${formatDate(startDate)}~${formatDate(endDate)}`

  return (
    <>
      <Header placeholder={`${location} | ${dateRange} | ${numOfGuests}`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            {dateRange} | {numOfGuests}명
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            {location}에 위치한 300개 이상의 숙소
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">숙소 유형</p>
            <p className="button">요금</p>
            <p className="button">취소 수수료 없음</p>
            <p className="button">침실과 침대</p>
            <p className="button">필터 추가하기</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                description={item.description}
                lat={item.lat}
                long={item.long}
                star={item.star}
                price={item.price}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden md:inline-flex md:min-w-[50vw]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Search

export interface InfoCardI {
  description: string
  img: string
  lat: number
  location: string
  long: number
  price: string
  star: number
  title: string
  total: string
}

interface SearchComponentPropsI {
  searchResults: InfoCardI[]
}

export async function getServerSideProps() {
  try {
    const searchResults = await axios.get('https://links.papareact.com/isz')
    return {
      props: { searchResults: searchResults.data },
    }
  } catch (e) {
    console.error(e)
  }
}
