import React from 'react';
import img1 from '../images/Frame 9.png'
import img2 from '../images/Frame 10.png'
import img3 from '../images/Frame 11.png'
import img4 from '../images/Frame 12.png'
import img5 from '../images/Frame 13.png'


function WorkShow() {
    return (
        <div className="bg-white">
            <div className="mx-0 pt-0 pb-10 ">
                    <div className=" flex flex-row  items-center gap-x-1 overflow-hidden">
                        <img
                            className="flex-auto h-44 lg:h-80 md:h-60 sm:h-48 object-contain "
                            src={img4}
                        />
                        <img
                            className="flex-auto h-44 lg:h-80 md:h-60 sm:h-48 object-contain"
                            src={img1}
                        />
                        <img
                            className="flex-auto h-44 lg:h-80 md:h-60 sm:h-48 object-contain"
                            src={img2}
                        />
                        <img
                            className="flex-auto h-44 lg:h-80 md:h-60 sm:h-48 object-contain "
                            src={img3}
                        />
                        <img
                            className="flex-auto h-44 lg:h-80 md:h-60 sm:h-48 object-contain "
                            src={img5}
                        />
                </div>


            </div>
            <div className="mt-8 mb-8 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 outline outline-1 outline-black"
                    >
                        View Recent Work
                    </a>
                </div>
        </div>
    )
}

export default WorkShow;