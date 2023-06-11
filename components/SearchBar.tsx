'use client'

import Image from 'next/image'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import SearchManu from './SearchManu'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

const SearchBar = ({ setManu, setModel }) => {
  const [searchManu, setSearchManu] = useState('')
  const [searchModel, setSearchModel] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchManu === '' && searchModel === '') {
      return alert('Please enter a manufacturer or model')
    }
    setModel(searchModel)
    setManu(searchManu)
  }

  

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManu selected={searchManu} setSelected={setSearchManu} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />

        <input
          type="text"
          placeholder="Tiguan"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
