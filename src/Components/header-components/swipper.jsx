import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarouselImage from '../../assets/images/story.jpg'
function Swipper() {
    return (
        <Swiper
            className='overflow-x-hidden'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
                320: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 5,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
            navigation={false}
            pagination={false}
            scrollbar={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            swiper-pagination-bullet={{ 'display': 'none' }}>
            <SwiperSlide>
                <div className='relative hover:opacity-[0.7] transition-all duration-200'>
                    <img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" />
                    <div className='rounded-tr-none rounded-tl-none absolute rounded-lg top-[130px] flex justify-center border h-[70px] bg-white w-full'>
                        <i class="fa-solid fa-circle-plus mt-[-20px] p-1 bg-white rounded-full text-[40px] text-blue-600"></i>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
            <SwiperSlide className='hover:opacity-[0.7] transition-all duration-200'><img className='h-[200px] w-full rounded-xl' src={CarouselImage} alt="" /></SwiperSlide>
        </Swiper>
    )
}
export default Swipper;