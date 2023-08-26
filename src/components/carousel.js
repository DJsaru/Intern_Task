import React from 'react';
import './carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    img: 'https://img.freepik.com/premium-photo/attractive-school-teacher-isolated_115919-22931.jpg?w=1380',
    name: 'Shilpa Shetty',
    career: 'Software Engineer'
  },
  {
    img: 'https://img.freepik.com/premium-photo/smiling-businessman-isolated-white_53419-1272.jpg?w=1380',
    name: 'Aditya Jannawar',
    career: 'UX Designer'
  },
  {
    img: 'https://img.freepik.com/premium-photo/attractive-school-teacher-isolated_115919-22931.jpg?w=1380',
    name: 'Michael Johnson',
    career: 'Data Scientist'
  },
  
  {
    img: 'https://img.freepik.com/premium-photo/smiling-businessman-isolated-white_53419-1272.jpg?w=1380',
    name: 'Jitesh Hulsure',
    career: 'Product Manager'
  },
  {
    img: 'https://img.freepik.com/premium-photo/smiling-businessman-isolated-white_53419-1272.jpg?w=1380',
    name: 'Sarang Jaybhaye',
    career: 'Marketing Specialist'
  }
];

const responsiveSettings = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2 
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsiveSettings}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="transform 300ms ease-in-out"
        containerClass="carousel"
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {data.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.career}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
