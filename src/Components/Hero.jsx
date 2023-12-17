import React from 'react';
import img1 from '../images/Logo1.png';
import img2 from '../images/Logo2.png';
import img3 from '../images/Logo3.png';
import img4 from '../images/Logo4.png';
import img5 from '../images/Logo5.png';
import img6 from '../images/Logo6.png';


function Hero() {
    

    return (
        <div className="bg-white">
            

            <div className="relative isolate px-6 pt-1 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div
                        className="relative left-[calc(40%-2rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80bde5] to-[#f048cc] opacity-30 sm:left-[calc(100%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">

                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Elevate Your Presence with Seamless Design and Innovation.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            From strategic planning to digital presence, we're your dedicated partner in achieving solo success.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                View Pricing
                            </a>

                        </div>
                    </div>

                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <h2 className="text-center text-md font-semibold leading-8 text-slate-500">
                                Trusted By 250+ Companies
                            </h2>
                            <div className="mx-auto mt-10 grid max-w-lg items-center gap-x-12 gap-y-10 sm:grid-cols-1 sm:gap-x-10 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                                <img
                                    className="col-span-1 max-h-12 w-full object-contain "
                                    src={img1}
                                    alt="zapier"
                                />
                                <img
                                    className="col-span-1 max-h-12 w-full object-contain"
                                    src={img2}
                                    alt="Spotify"
                                />
                                <img
                                    className="col-span-1 max-h-12 w-full object-contain"
                                    src={img3}
                                    alt="zoom"
                                />
                                <img
                                    className="col-span-1 max-h-12 w-full object-contain "
                                    src={img4}
                                    alt="slack"
                                />
                                <img
                                    className="col-span-1 max-h-12 md:col-start-2  lg:col-span-1 w-full object-contain"
                                    src={img5}
                                    alt="amazon"
                                />
                                <img
                                    className="col-span-1 max-h-12 w-full object-contain"
                                    src={img6}
                                    alt="Adobe"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >

                </div>
            </div>
        </div>
    )
}


export default Hero;