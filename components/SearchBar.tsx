'use client'

import { useState } from 'react'

import SearchManu from './SearchManu'

const SearchBar = () => {
  const [manu, setManu] = useState('')

  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManu manu={manu} setManu={setManu} />
      </div>
    </form>
  )
}

export default SearchBar
