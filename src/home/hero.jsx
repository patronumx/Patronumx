// src/components/HeroOnly.jsx
import React from "react";

export default function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire your search action here
  };

  return (
    // Add extra spacing on top for desktop screens using pt-32 (8rem) or pt-40 if you want it lower
    // On mobile, keep as current, on md+ add padding top
    <section className="relative py-12 pt-24 md:pt-32 overflow-hidden bg-transparent sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          {/* Left column */}
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Devs with Employers
            </h1>

            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat.
            </p>


            {/* Rating */}
            <div className="mt-8 sm:mt-12">
              <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>

              <div className="flex items-center mt-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const id = `gradStar-${i}`;
                    return (
                      <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                          fill={`url(#${id})`}
                        />
                        <defs>
                          <linearGradient id={id} x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    );
                  })}
                </div>
                <span className="ml-2 text-base font-normal text-white">4.1/5</span>
                <span className="ml-1 text-base font-normal text-gray-500">(14k Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="absolute inset-0">
              <svg
                className="opacity-70"
                style={{ filter: "blur(64px)" }}
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#c)"
                />
                <defs>
                  <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Removed noise image to keep background truly transparent */}
            <img
              className="relative w-full max-w-md mx-auto"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
