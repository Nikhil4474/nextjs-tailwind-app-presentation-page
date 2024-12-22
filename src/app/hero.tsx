"use client"

import Image from "next/image"
import { Button, Typography } from "@material-tailwind/react"

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              color="white"
              className="mb-4">
              Heal 2 Fit
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28">
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </Typography>
          </div>
          <Image
            width={470}
            height={576}
            src="https://media.istockphoto.com/id/1390699669/photo/assortment-of-healthy-food-for-clean-eating-flexitarian-mediterranean-diet.jpg?s=612x612&w=0&k=20&c=riJ9OUUAPS2KEDgQh7dOpsbaoDGeRPkq1x4RRVtTucE="
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-3">
            Dietition Pavani
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12">
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default Hero
