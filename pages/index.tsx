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
      {/* FIXME: 데이트피커 타입문제로 Header props 빈문자열 설정 */}
      <Header placeholder={''} />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pt-5 pb-5 text-3xl font-semibold">
            설레는 다음 여행을 위한 아이디어
          </h2>
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
          <h2 className="pt-8 pb-5 text-3xl font-semibold">
            어디서나 에어비앤비와 함께
          </h2>
          <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map((item: CardsDataI) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="에어비앤비 체험 둘러보기"
          description="여행 중 만나는 이색적인 즐길 거리"
          buttonText="온라인 체험"
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
