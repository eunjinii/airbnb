import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { InfoCardI } from '../pages/search'

function InfoCard({
  img,
  location,
  description,
  lat,
  long,
  star,
  price,
  title,
  total,
}: InfoCardI): JSX.Element {
  return (
    <div
      className="flex cursor-pointer flex-col border-b py-7 transition duration-200 
    ease-out first:border-t hover:opacity-80 md:flex-row md:px-2 md:pr-4"
    >
      <div className="relative h-[180px] w-[100%] flex-shrink-0 md:h-52 md:w-80">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-grow flex-col pt-5 md:pt-0 md:pl-5">
        <div className="flex justify-between">
          <p className="text-gray-500">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="w-10 border-b pt-2" />

        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
