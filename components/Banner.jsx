import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-2xl font-semibold sm:text-3xl">
          호기심을 자극하는 숙소로 떠나보세요
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          유연한 검색
        </button>
      </div>
    </div>
  )
}

export default Banner
