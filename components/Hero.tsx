import Image from "next/image"
import { Check } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center w-full">
        {/* Left content section */}
        <div className="w-full lg:w-2/3 pt-32 lg:pt-48 z-10">
          <main>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
              Fitness is not a goal but a lifestyle
            </h1>
            <p className="mt-6 text-xl text-gray-800 max-w-xl">
              Achieve strength, balance, and lasting wellness with tailored programs for every level.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-red-500" />
                All Professional features
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-red-500" />
                API access
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-red-500" />
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-red-500" />
                Custom integrations
              </li>
            </ul>
            {/* Google Rating Images */}
            <div className="flex mt-6 gap-4">
              <Image 
                src="/g.png" 
                alt="Google Rate"
                className="w-32 h-auto"
              />
              <Image 
                src="/g1.png" 
                alt="Google Rating"
                className="w-36 h-auto"
              />
            </div>
          </main>
        </div>
      </div>
      {/* Right image section */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/1.png"
          alt="Fitness Model"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

