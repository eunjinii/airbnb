import type { NextPage } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home: NextPage<HomePropsI> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Stay at Eunjin's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull data from a server - API  */}
          <div className="gird-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: ExploreDataI) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map((item: CardsDataI) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

interface ExploreDataI {
  img: string
  location: string
  distance: string
}

interface CardsDataI {
  img: string
  title: string
}

interface HomePropsI {
  exploreData: ExploreDataI[]
  cardsData: CardsDataI[]
}

export async function getStaticProps() {
  try {
    const exploreData = await axios.get('https://links.papareact.com/pyp')
    const cardsData = await axios.get('https://links.papareact.com/zp1')
    return {
      props: {
        exploreData: exploreData.data,
        cardsData: cardsData.data,
      },
    }
  } catch (e) {
    console.error(e)
  }
}

export default Home
