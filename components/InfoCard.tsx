import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

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
}) {
  return (
    <div>
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>

      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
