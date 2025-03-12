'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classess from "./tem.module.css"

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                background: "orange", 
                borderRadius: "50%", 
                marginRight:"12px", 
                zIndex:"10"
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                background: "orange", 
                borderRadius: "50%",
                marginLeft:"12px", 
                zIndex:"10"
            }}
            onClick={onClick}
        />
    );
};

const tem = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const data = [
        { id: 1, image: "https://picsum.photos/200?random=1", name: "Ravi", age: 25, city: "Delhi", profession: "Engineer" },
        { id: 2, image: "https://picsum.photos/200?random=2", name: "Priya", age: 30, city: "Mumbai", profession: "Doctor" },
        { id: 3, image: "https://picsum.photos/200?random=3", name: "Amit", age: 28, city: "Pune", profession: "Designer" },
        { id: 4, image: "https://picsum.photos/200?random=4", name: "Neha", age: 22, city: "Bangalore", profession: "Developer" },
        { id: 5, image: "https://picsum.photos/200?random=5", name: "Raj", age: 35, city: "Hyderabad", profession: "Manager" },
        { id: 6, image: "https://picsum.photos/200?random=6", name: "Anjali", age: 27, city: "Chennai", profession: "Architect" },
        { id: 7, image: "https://picsum.photos/200?random=7", name: "Vikram", age: 32, city: "Jaipur", profession: "Photographer" },
        { id: 8, image: "https://picsum.photos/200?random=8", name: "Pooja", age: 26, city: "Kolkata", profession: "Journalist" },
        { id: 9, image: "https://picsum.photos/200?random=9", name: "Sahil", age: 29, city: "Lucknow", profession: "Chef" },
        { id: 10, image: "https://picsum.photos/200?random=10", name: "Simran", age: 24, city: "Chandigarh", profession: "Writer" }
    ];

    return (
        <div className={classess.myCarousel}>
            <div style={{}} className={classess.slickSlide}>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className=' text-black  rounded-2xl my-2   h-[450px] shadow-lg'>
                            <div className='flex justify-center items-center  rounded-2xl bg-indigo-400 h-56'>
                                <img src={item.image} alt={item.name} className='rounded-full w-32 h-32' />
                            </div>
                            <div className='p-4 flex justify-center flex-col items-center'>
                                <h2 className='text-2xl font-bold'>{item.name}</h2>
                                <p className='text-lg'>{item.profession}</p>
                                <p className='text-lg'>{item.city}</p>
                                <p className='text-lg'>{item.age}</p>
                                <button className='bg-orange-400 text-white px-4 py-1 rounded-2xl mt-2'>Submit</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default tem;
