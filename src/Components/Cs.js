import React from 'react';
import './Cs.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';

export default function Cs() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade w-80 mx-auto"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="carousel-img d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="carousel-img d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="carousel-img d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
