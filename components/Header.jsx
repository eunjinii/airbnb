import React, { useState } from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useRouter } from 'next/router'

/**
 * @description 상단 검색바
 */
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numOfGuests, setNumOfGuests] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    })
    setSearchInput('')
  }

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md">
      {/* Left - Logo */}

      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex h-10 cursor-pointer items-center md:px-10"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search */}
      <div className="flex items-center rounded-full py-2 md:border-2  md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 outline-none"
          type="text"
          placeholder={placeholder || '어디로 여행가세요?'}
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">호스트 되기</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FF5A60']}
            onChange={handleSelect}
          />

          <div className="mb-4 flex items-center border-b py-5">
            <h2 className="flex-grow text-xl font-semibold">게스트 추가</h2>
            <UsersIcon className="h-5" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              max={30}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow cursor-pointer text-gray-500"
            >
              취소
            </button>
            <button
              onClick={search}
              className="flex-grow cursor-pointer text-red-400"
            >
              검색
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

// interface HeaderComponentPropsI {
//   placeholder?: string;
// }

export default Header
