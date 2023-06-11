'use client'

import { useState, useEffect } from 'react'
import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //Search states
  const [manu, setManu] = useState('')
  const [model, setModel] = useState('')

  //Filter states

  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manu: manu || '',
        model: model || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
      })
      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, year, limit, manu, model])

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
          <SearchBar setManu={setManu} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loading.svg"
                  width={50}
                  height={50}
                  alt="loader"
                  className="obeject-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
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
