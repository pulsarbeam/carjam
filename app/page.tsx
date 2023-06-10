import { Hero, CustomFilter, SearchBar, CarCard } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars()
  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

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

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            Oops no results
            <h2 className="text-black text-xl font-bold">
              {allCars?.message}{' '}
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}
