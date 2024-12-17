import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselImage from "../../assets/images/story.jpg";
import { Images } from '../../assets/index'
import { useState } from "react";
function Swipper() {
    return (
        <>
            <Swiper
                className="overflow-x-hidden"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                navigation={false}
                pagination={false}
                scrollbar={false}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                swiper-pagination-bullet={{ display: "none" }}
            >
                <SwiperSlide>

                    <button >
                        <div className="relative transition-all duration-200">
                            <div className="relative">
                                <img
                                    className=" h-[270px] w-auto rounded-xl"
                                    src={Images.story}
                                    alt=""
                                />
                                <div className="absolute bottom-3 z-50 text-center flex items-center justify-center left-3 md:left-8">
                                    <p className="font-[600] text-center text-[16px]">Create Story</p>
                                </div>
                            </div>

                        </div>
                        <div className="rounded-tr-none rounded-tl-none absolute rounded-lg bottom-[5px] flex justify-center border h-[60px] bg-white w-full">
                            <i class="cursor-pointer fa-solid fa-circle-plus mt-[-20px] p-1 bg-white rounded-full text-[40px] text-blue-600"></i>
                        </div>
                    </button>

                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="hover:opacity-[0.7] transition-all duration-200">
                    <div className="relative">
                        <img
                            className=" h-[270px] w-auto rounded-xl"
                            src={CarouselImage}
                            alt=""
                        />
                        <div className="flex items-center justify-center">
                            <div className="absolute bottom-[5px] left-5">
                                <p className="font-[600] text-[16px] text-white shadow-lg leading-tight">Muhammad NaeemUllah</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>

            </div>
        </>
    );
}
export default Swipper;
