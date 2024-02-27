import React from 'react'

import useProduct from 'vtex.product-context/useProduct'

import { Swiper, SwiperSlide } from 'swiper/react';
import "./productadditionalimages.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductAdditionalImages = () => {
    const { product } = useProduct()
    const images = product.items[0].images

    const imagensToShow = images.slice(6)

    return (
        <>
            {!imagensToShow && (
                <section className="product-additional-carousel">
                    <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                        {imagensToShow.map(image => (
                            <SwiperSlide key={image.imageUrl}>
                                <img className="imgPDP" src={`${image.imageUrl}`} alt={`${image.imageText}`} width="800" height="500" loading="lazy" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            )}
        </>
    )
}

export default ProductAdditionalImages