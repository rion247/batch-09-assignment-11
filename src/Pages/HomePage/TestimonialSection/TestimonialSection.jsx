import { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";   
import Slider from 'react-slick';
import { FcNext, FcPrevious } from "react-icons/fc";
import SingleTestimonial from "./SingleTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {

    const [testimonials, SetTestimonials] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(response => response.json())
            .then(json => SetTestimonials(json))
    }, [])

    console.log(testimonials);

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <FcNext />,
        prevArrow: <FcPrevious />
    };

    return (
        <div className="font-poppins mt-10 md:mt-16 lg:mt-24 xl:mt-32 text-center container mx-auto mb-10 md:mb-16 lg:mb-24 xl:mb-32 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-6  space-y-6 sm:space-y-12">

            <Slider {...settings}>
                {
                    testimonials.map(testimonial => <SingleTestimonial key={testimonial.id} testimonial={testimonial}></SingleTestimonial>)
                }
            </Slider>

        </div >
    );
};

export default TestimonialSection;