import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductImage } from '../ProductImage';
import { Navigation, Pagination } from 'swiper/modules';

const ProductGallery = ({ images }) => {
    return (
        <div id="quickViewSidebarImageSlider">
            <Swiper
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image.id}>
                        <ProductImage image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductGallery
