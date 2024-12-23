import React from "react";

export default function Projects () {

    return (
        <div className="bg-black text-white pb-8">
            <div className="w-full overflow-x-scroll scrollbar-hide">
                <h1 className="text-center pb-12 text-2xl font-bold">EXPLORE OUR ONE OF A KIND APPROACH</h1>
                <div className="flex space-x-8">
                    <a href="https://www.platinumexoticstx.com/" className="block">
                        <div className="relative bg-white text-black w-[300px] h-[450px] rounded-2xl ml-8 flex-shrink-0 overflow-hidden group">
                            <img src="/images/PlatinumExoticsSS.png" alt="PlatinumExotics Overlay" className="rounded-2xl w-full h-full object-cover"/>
                            <div className="absolute inset-0 flex items-end justify-center opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <p className="bg-black bg-opacity-75 text-white text-lg font-bold w-full text-center py-2">
                                    SEE CASE STUDY
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="bg-black text-black w-[300px] h-[450px] rounded-2xl flex-shrink-0">
                        <p>Here</p>
                    </div>
                    <div className="bg-black text-black w-[300px] h-[450px] rounded-2xl flex-shrink-0">
                        <p>Here</p>
                    </div>
                    <div className="bg-black text-black w-[300px] h-[450px] rounded-2xl flex-shrink-0">
                        <p>Here</p>
                    </div>
                    <div className="bg-black text-black w-[300px] h-[450px] rounded-2xl flex-shrink-0">
                        <p>Here</p>
                    </div>
                </div>
            </div>
        </div>
    );


}