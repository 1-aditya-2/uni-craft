import React from 'react';
import img1 from '../images/Company logo.png'

function Testimonial() {

    return (
        <section className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl lg:max-w-5xl">
                <img className="mx-auto h-10" src={img1} alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center lg:text-4xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            We've been with unicraft to kick start every new project and can't imagine working without it.
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div className="mt-4 flex-col items-center justify-center  text-base">
                        <center>
                            <div className="font-semibold  text-gray-900">Candice Wu</div>
                            <div className="text-gray-500">Product Mananger, Sisyphus</div>
                        </center>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}



export default Testimonial;