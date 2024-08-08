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
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ContactUsLanding.css'; // Asegúrate de crear este archivo CSS

const products = [
  {
    image: img1,
    title: 'Libreta Pop-it Sirena',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y amantes de sirenas.',
  },
  {
    image: img2,
    title: 'Libreta Pop-it auto',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y amantes de los autos.',
  },
  {
    image: img3,
    title: 'Libreta Pop-it Helado',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y amantes de los helados.',
  },
  {
    image: img4,
    title: 'Libreta Pop-it Unicornio',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y amantes de los unicornios.',
  },
  {
    image: img5,
    title: 'Libreta Pop-it Corazon',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y que irradia amor.',
  },
  {
    image: img6,
    title: 'Libreta Pop-it Cohete',
    price: '$91.90',
    description: 'Libreta ideal para regreso de clases y amantes de sirenas',
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
            <CSSTransition key={index} timeout={500} classNames="fade">
              <div>
                <ProductCard 
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              </div>
            </CSSTransition>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
}

export default ContactUsLanding;
