import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../components/ProductCard';
import img1 from '../../assets/images/contact-us/0X4A2101.jpg';
import img2 from '../../assets/images/contact-us/0X4A2102.jpg';
import img3 from '../../assets/images/contact-us/0X4A2103.jpg';
import img4 from '../../assets/images/contact-us/0X4A2104.jpg';
import img5 from '../../assets/images/contact-us/0X4A2105.jpg';
import img6 from '../../assets/images/contact-us/0X4A2107.jpg';
import styled from 'styled-components';

const products = [
  {
    image: img1,
    title: 'Producto 1',
    price: '$100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor',
  },
  {
    image: img2,
    title: 'Producto 2',
    price: '$150',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor,',
  },
  {
    image: img3,
    title: 'Producto 3',
    price: '$200',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: img4,
    title: 'Producto 4',
    price: '$120',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: img5,
    title: 'Producto 5',
    price: '$180',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: img6,
    title: 'Producto 6',
    price: '$90',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const SliderContainer = styled.div`
  position: relative;

  .slick-slide {
    padding: 0 5px; /* Espacio pequeño entre las tarjetas */
  }

  .slick-list {
    margin: 0 -5px; /* Ajustar el contenedor para compensar el padding de las tarjetas */
  }

  .slick-track {
    display: flex;
    align-items: stretch;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2); /* Aumentar transparencia */
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px; /* Aumentar tamaño */
  height: 50px; /* Aumentar tamaño */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4); /* Cambiar color en hover */
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const ContactUsLanding = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        }
      }
    ]
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "4em" }}>Ofertas</h1>
      <SliderContainer>
        <PrevButton onClick={() => sliderRef.current.slickPrev()}>&#9664;</PrevButton>
        <NextButton onClick={() => sliderRef.current.slickNext()}>&#9654;</NextButton>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard 
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
}

export default ContactUsLanding;
