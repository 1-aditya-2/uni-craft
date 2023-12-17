import React from 'react';

const Pricing = () => {
    return (
        <section className="relative bg-purple-50 pb-12">
           

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="absolute inset-x-0  z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div
                        className="relative left-[calc(100%-2rem)] aspect-[1155/678] w-[39.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80bde5] to-[#f048cc] opacity-30 sm:left-[calc(100%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 ">Pricing made for collaborative support.</h2>
                    <center><p className=" text-gray-500 w-3/5 font-sans sm:text-lg ">Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p></center>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-4 justify-center sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* Starter Card */}
                    <div className="flex flex-col p-6 max-w-lg lg:col-span-1 md:col-span-2 text-gray-900 bg-white rounded-lg border mx-auto border-gray-100">
                        <h3 className="mb-4 text-2xl font-semibold">Freebie</h3>
                        <p className=" text-gray-400 sm:text-base">Ideal for individuals who need quick access to basic features.</p>
                        <div className="flex items-baseline my-8">
                            <span className="mr-2 text-5xl font-semibold">$0</span>
                            <span className="text-gray-600 ">/month</span>
                        </div>
                        <a href="#" className="text-black border-solid border-2 border-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8">Get Started Now</a>

                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>20,000+ of PNG & SVG graphics</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Access to 100million stock images</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload custom icons and fonts</span>
                            </li>
                            <li className="flex items-center  font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Sharing</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload graphics & videos in up to 4k</span>
                            </li>
                            <li className="flex items-center font-semibold  text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Projects</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Instant Access to our design system</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Create teams to collaborate on designs</span>
                            </li>
                        </ul>
                    </div>
                    {/* Starter Card */}
                    <div className="flex flex-col p-6 mx-auto lg:col-span-1 md:col-span-2 my-auto max-w-lg text-white bg-gray-900 rounded-lg border border-gray-100">
                        <h3 className="mb-4 text-2xl font-semibold">Professional</h3>
                        <p className=" text-gray-200 sm:text-base">Ideal for individuals who need advanced features and tools for client work.</p>
                        <div className="flex items-baseline my-8">
                            <span className="mr-2 text-5xl font-semibold">$25</span>
                            <span className="text-gray-200 ">/month</span>
                        </div>
                        <a href="#" className="text-black bg-white border-solid border-2 border-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8">Get Started Now</a>

                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center font-semibold text-slate-100 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>20,000+ of PNG & SVG graphics</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-100 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Access to 100million stock images</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-100 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload custom icons and fonts</span>
                            </li>
                            <li className="flex items-center  font-semibold text-slate-100 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Sharing</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-100 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload graphics & videos in up to 4k</span>
                            </li>
                            <li className="flex items-center font-semibold  text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Projects</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Instant Access to our design system</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-400 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Create teams to collaborate on designs</span>
                            </li>
                        </ul>
                    </div>
                    {/* Starter Card */}
                    <div className="flex flex-col p-6 max-w-lg lg:col-span-1 md:col-span-2 md:col-start-2 text-gray-900 bg-white rounded-lg border mx-auto border-gray-100 shadow xl:p-8">
                        <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                        <p className=" text-gray-400 sm:text-base">Ideal for businesses who need personalized sevices and security for large teams.</p>
                        <div className="flex items-baseline my-8">
                            <span className="mr-2 text-5xl font-semibold">$100</span>
                            <span className="text-gray-600 ">/month</span>
                        </div>
                        <a href="#" className="text-black border-solid border-2 border-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8">Get Started Now</a>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>20,000+ of PNG & SVG graphics</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Access to 100million stock images</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload custom icons and fonts</span>
                            </li>
                            <li className="flex items-center  font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Sharing</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Upload graphics & videos in up to 4k</span>
                            </li>
                            <li className="flex items-center font-semibold  text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Unlimited Projects</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6  bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Instant Access to our design system</span>
                            </li>
                            <li className="flex items-center font-semibold text-slate-900 space-x-3">
                                <svg className="flex-shrink-0 w-6 h-6 bi bi-check2-circle" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" clipRule="evenodd"></path></svg>
                                <span>Create teams to collaborate on designs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
