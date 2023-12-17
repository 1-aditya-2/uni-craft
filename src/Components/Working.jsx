import React from 'react';

function Working() {
    return (
        <>
            <section className=" mt-16  overflow-hidden  ">
                <div className=" py-12 sm:py-16  shadow-lg m-12 bg-white rounded-xl border-solid border-slate-50 overflow-hidden">
                    <div className="px-4 mx-auto max-w-7xl relative">
                        <div className="text-center">
                            <h1 className="text-5xl  font-bold pb-2">How it works</h1>
                            <p className="text-slate-600 font-semibold">Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
                        </div>
                        <div className="mt-12 lg:mt-20">
                            <div className="grid grid-cols-3 text-center lg:gap-x-12 md:gap-x-8 sm:gap-x-4">

                                <div className="relative box1 sm:p-0 md:p-4 lg:p-8">
                                    <svg
                                        className="absolute -ml-4 lg:ml-4 sm:ml-0 md w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 512 512" 
                                        viewBox="0 0 512 512"
                                        fill="#dcbdf7"
                                    >
                                        <polygon points="300.516 1 141.51 120.793 185.357 178.98 297.633 94.374 297.633 511 370.49 511 370.49 1" fill="#dcbdf7" class="color000000 svgShape"></polygon>
                                        {/* Your SVG Path */}
                                    </svg>
                                    <div className="relative mt-16 lg:w-64 md:w-48 sm:w-36 lg:mt-28 md:mt-24 sm:mt-20 backdrop-blur-sm bg-white/50 pb-12">
                                        <div className="mt-4  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                                            Subscribe
                                        </div>
                                        <div className="mt-2 text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500">
                                            Subscribe to a plan & you'll get instant access to your private Slack channel.
                                        </div>
                                    </div>
                                </div>

                                <div className="relative box2 sm:p-0 md:p-4 lg:p-8">
                                    <svg className="absolute w-28 h-28 lg:ml-12 md:ml-4 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="2"><path d="M421.024,511c-19.561,0-287.35,0-301.385,0c0-32.991,0-76.587,0-110.528
						c2.859-2.74,177.266-169.88,187.421-179.611c29.61-28.377,29.447-65.15,19.421-90.102
						c-10.025-24.952-35.351-51.614-76.363-51.614c-31.373,0-59.579,17.432-73.609,45.493l-15.638,31.275l-69.895-34.948
						l15.638-31.275C133.779,35.36,189.319,1,250.118,1c34.044,0,66.227,10.126,93.069,29.282
						c50.766,36.231,76.459,100.185,64.877,161.462c-6.124,32.403-22.354,61.981-46.933,85.536L198.79,432.855h222.234V511z" fill="#dcbdf7" class="color000000 svgShape"></path></svg>
                                    <div className="relative mt-16 lg:w-64 md:w-48 sm:w-36 lg:mt-28 md:mt-24 sm:mt-20 backdrop-blur-sm bg-white/50 pb-12">
                                        <h3
                                            className="mt-4  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 ">
                                            Request
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500">
                                            Submit any number of requests. We'll work through them, ensuring consistent updates every 24-48 hours
                                        </p>
                                    </div>
                                </div>
                                <div className="relative box2 sm:p-0 md:p-4 lg:p-8">
                                    <svg className="absolute w-28 h-28 lg:ml-12 md:ml-4 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="3"><path d="M250.083,229.98c45.983,0,83.265-34.951,83.265-78.061s-37.282-78.061-83.265-78.061
						c-31.953,0-59.701,16.872-73.648,41.633h-70.64C115.932,50.813,178.995,1,255.287,1c83.349,0,150.918,59.462,150.918,132.808
						c0,54.851-37.782,101.927-91.686,122.192c53.904,20.265,91.686,67.341,91.686,122.192c0,73.346-67.57,132.808-150.918,132.808
						c-76.292,0-139.355-49.814-149.492-114.49h70.64c13.947,24.761,41.695,41.633,73.648,41.633
						c45.983,0,83.265-34.951,83.265-78.061s-37.282-78.061-83.265-78.061V229.98z" fill="#dcbdf7" class="color000000 svgShape"></path></svg>
                                    <div className="relative mt-16 lg:w-64 md:w-48 sm:w-36 lg:mt-28 md:mt-24 sm:mt-20 backdrop-blur-sm bg-white/50 pb-12">

                                        <h3
                                            className="mt-4  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                                            Revise
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500">
                                            Need changes? We guarantee unlimited revisions until you're 200% satisfied.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Working;