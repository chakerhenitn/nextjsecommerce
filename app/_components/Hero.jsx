import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Any Product You Need.
          <strong className="font-extrabold text-primary sm:block"> Just One Magic Click. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          Start your magic navigation now as a hero. We are all ears!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium hover:text-teal-100 text-white shadow  focus:outline-none focus:ring active:bg-teal-600/75 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-teal-600/75 focus:outline-none focus:ring active:text-teal-600/75 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
