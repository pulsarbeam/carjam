import { Hero, CustomFilter, SearchBar } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-contianer">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore cars you may like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-contianer">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
